import React, { PureComponent } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import PropTypes from 'prop-types';
import { Flex } from '@ant-design/react-native';
import theme from '@/common/styles/variables';
import Modal from '@/components/Modal';
import { request, Storage } from '@/utils';
import styles from './style';
import Record from './Record';
import OperateList from './OperateList';
import outIcon from './images/ic_out.png';
import config from '@/config';

const { authKey } = config;

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

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    userInfo: {}, // 用户信息
    isShowModal: false // 是否显示modal
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

  /**
   *  设置员工状态
   */
  changeWorkStatus = value => {
    if (value === 'offline') {
      this.setState({
        isShowModal: true
      });
    }
    if (value === 'online') {
      this.setCourierOnline();
    }
  };

  /**
   *  快递员上班
   */
  setCourierOnline = () => {
    request('/courier/online', {
      method: 'put'
    }).then(data => {
      const { result } = data;
      if (result) {
        this.closeModal();
      }
    });
  };

  /**
   *  快递员下班
   */
  setCourierOffline = () => {
    request('/courier/offline', {
      method: 'put'
    }).then(data => {
      const { result } = data;
      if (result) {
        this.closeModal();
      }
    });
  };

  /**
   *  关闭
   */
  closeModal = () => {
    this.setState({
      isShowModal: false
    });
  };

  /**
   *  退出登录
   */
  signOut = () => {
    Storage.remove(authKey);
    const { navigation } = this.props;
    navigation.navigate('Auth');
  };

  render() {
    const { userInfo, isShowModal } = this.state;
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
                initial={userInfo.onlineState ? 0 : 1}
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
          <TouchableOpacity onPress={this.signOut}>
            <Flex justify='between' style={styles.signOut}>
              <Text style={styles.label}>退出登录</Text>
              <Image source={outIcon} style={styles.icon} />
            </Flex>
          </TouchableOpacity>

          <Text style={styles.version}>当前版本v1.0.0</Text>
        </SafeAreaView>
        <Modal
          leftText='确定'
          rightText='取消'
          highLightPosition='left'
          title='收工'
          isVisible={isShowModal}
          onLeft={this.setCourierOffline}
          onRight={this.closeModal}
        >
          <Text style={styles.modal}>将无法接受新的配送订单，确认收工？</Text>
        </Modal>
      </ScrollView>
    );
  }
}

export default personalCenter;
