import React, { PureComponent } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Tabs, Badge } from '@ant-design/react-native';
import theme from '@/common/styles/variables';
import EmptyOrder from '@/components/EmptyOrder';
import OrderList from './orderList';
// import OfflineTip from './offlineTip';

import styles from './style';

const headerLeft = require('./images/head_60.png');
const topNotice = require('./images/top_notice.png');

const { $headingColor, $textColor } = theme;

const abc = () => {};

class Order extends PureComponent {
  static navigationOptions = {
    title: '订单',
    headerLeft: (
      <TouchableOpacity onPress={abc}>
        <Image source={headerLeft} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={abc}>
        <Badge text={109} dot size='large'>
          <Image source={topNotice} style={{ width: 30, height: 30 }} />
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

  render() {
    const tabs = [
      { title: '待接单(0)' },
      { title: '待录单(0)' },
      { title: '待取件(0)' },
      { title: '配送中(0)' }
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
            <OrderList />
          </View>
          <View>
            <EmptyOrder />
          </View>
          <View>
            <Text>Content of Third Tab</Text>
          </View>
          <View>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        {/* <OfflineTip /> */}
      </SafeAreaView>
    );
  }
}

export default Order;
