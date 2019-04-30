import React, { PureComponent } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Tabs, Badge } from '@ant-design/react-native';
import theme from '@/common/styles/variables';
import { NavigationService, request } from '@/utils';
import OrderList from './OrderList';
import OfflineTip from './OfflineTip';
import styles from './style';

const headerLeft = require('./images/head_60.png');
const topNotice = require('./images/top_notice.png');
const taskIcon = require('./images/float_task.png');

const { $headingColor, $textColor } = theme;

/**
 * 跳转个人中心
 */
const goToPersonalCenter = () => {
  NavigationService.navigate('PersonalCenter');
};

/**
 * 跳转信息通知
 */
const goToNotification = () => {
  NavigationService.navigate('Notification');
};

class Order extends PureComponent {
  static navigationOptions = {
    title: '订单',
    headerLeft: (
      <TouchableOpacity onPress={goToPersonalCenter}>
        <Image source={headerLeft} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={goToNotification}>
        <Badge text={109} dot>
          <Image source={topNotice} style={{ width: 30, height: 30, right: -8 }} />
        </Badge>
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerLeftContainerStyle: {
      paddingLeft: 20
    },
    headerRightContainerStyle: {
      paddingRight: 20
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

  state = {
    onlineState: true, // 是否配送员上班
    count: {
      sending: 0,
      waitAccep: 0,
      waitFetch: 0,
      waitWrite: 0
    }
  };

  componentDidMount() {
    this.getOnlineState();
  }

  /**
   * 获取配送员是否上班
   */
  getOnlineState = () => {
    request('/courier/fight_today').then(data => {
      const { onlineState } = data;
      this.setState({
        onlineState
      });
      if (onlineState) {
        this.getCountOrder();
      }
    });
  };

  /**
   * 点击马上开工
   */
  onOnLine = () => {
    request('/courier/online', {
      method: 'put'
    }).then(data => {
      const { result } = data;
      if (result) {
        this.setState({
          onlineState: true
        });
      }
    });
  };

  /**
   * 获取类型订单统计
   */
  getCountOrder = () => {
    request('/express_orders/countorder', {
      noLoading: true
    }).then(({ result }) => {
      const { sending, waitAccept, waitFetch, waitWrite } = result;
      this.setState({
        count: {
          sending,
          waitAccept,
          waitFetch,
          waitWrite
        }
      });
    });
  };

  render() {
    const {
      onlineState,
      count: { sending = 0, waitAccept = 0, waitFetch = 0, waitWrite = 0 }
    } = this.state;
    const tabs = [
      { title: `待接单(${waitAccept})` },
      { title: `待录单(${waitWrite})` },
      { title: `待取件(${waitFetch})` },
      { title: `配送中(${sending})` }
    ];
    return (
      <SafeAreaView style={styles.page}>
        <Tabs
          tabs={tabs}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
          tabBarActiveTextColor={$headingColor}
          tabBarInactiveTextColor={$textColor}
        >
          <View style={{ flex: 1 }}>
            <OrderList status='wait_accept' />
          </View>
          <View>
            <OrderList status='wait_write' />
          </View>
          <View>
            <OrderList status='wait_fetch' />
          </View>
          <View>
            <OrderList status='sending' />
          </View>
        </Tabs>
        <View style={styles.task}>
          <Badge text={9} size='large'>
            <Image source={taskIcon} style={styles.taskImg} />
          </Badge>
        </View>
        {onlineState ? null : <OfflineTip onOnLine={this.onOnLine} />}
      </SafeAreaView>
    );
  }
}

export default Order;
