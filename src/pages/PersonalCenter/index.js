import React, { PureComponent } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { Flex } from '@ant-design/react-native';
import theme from '@/common/styles/variables';
import Modal from '@/components/Modal';
import { request } from '@/utils';
import styles from './style';
import Record from './record';
import OperateList from './operateList';
import outIcon from './images/ic_out.png';

const { $primaryColor, $textColorSecondary } = theme;
const headImg = require('./images/head.png');

class personalCenter extends PureComponent {
  static navigationOptions = {
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

  state = {
    userInfo: {}
  };

  componentDidMount() {
    this.getCourierInfo();
  }

  /**
   *  获取配送员信息
   */
  getCourierInfo = () => {
    request('/courier/fight_today').then(data => {
      this.setState({
        userInfo: data
      });
    });
  };

  changeWorkStatus = value => {
    if (value === 'offline') {
    }
  };

  render() {
    const { userInfo } = this.state;
    const options = [{ label: '开工', value: 'online' }, { label: '收工', value: 'offline' }];
    return (
      <ScrollView style={styles.page}>
        <SafeAreaView>
          <Flex style={styles.block} direction='column' justify='center'>
            <Image source={headImg} style={styles.headImg} />
            <Text style={styles.name}>{userInfo.courierName}</Text>
            <Text style={styles.phone}>{userInfo.courierMobile}</Text>
            <View style={styles.switch}>
              <SwitchSelector
                options={options}
                initial={0}
                buttonColor={$primaryColor}
                fontSize={14}
                backgroundColor='#efefef'
                bold
                height={35}
                textColor={$textColorSecondary}
                onPress={this.changeWorkStatus}
              />
            </View>
            <Record data={userInfo} />
          </Flex>
          <OperateList />
          <Flex justify='between' style={styles.signOut}>
            <Text style={styles.label}>退出登录</Text>
            <Image source={outIcon} style={styles.icon} />
          </Flex>
          <Text style={styles.version}>当前版本v1.0.0</Text>
        </SafeAreaView>
        <Modal leftText='确定' rightText='取消' highLightPosition='left' title='收工' isVisible>
          <Text style={styles.modal}>将无法接受新的配送订单，确认收工？</Text>
        </Modal>
      </ScrollView>
    );
  }
}

export default personalCenter;
