import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Flex } from '@ant-design/react-native';
import VersionNumber from 'react-native-version-number';
import Modal from 'react-native-modal';
import Divider from '@/components/Divider';
import config from '@/config';
import { request } from '@/utils';
import styles from './style';

// 区分客户端版本
const { clientNameAndroid, clientNameIOS } = config;
const clientName = Platform.OS === 'android' ? clientNameAndroid : clientNameIOS;

// 获取版本信息
const currentVersion = VersionNumber.buildVersion; // 版本号
// const currentVersionCode = VersionNumber.appVersion; // 版本名称

const bg = require('./image/pic.png');
const closeIcon = require('./image/ic-close.png');

class UpdateTip extends PureComponent {
  state = {
    status: 'before', // 状态 'before' 下载前 'downloading'下载中 'failure'下载失败
    isVisible: false, // 是否显示modal框
    promote: 0, // 更新方式(1升级，0不升级，2强制升级)
    versionCode: 'v1.2.1', // 外部版本号
    updateInfo: [], // 升级信息
    title: '升级到新版本',
    btnText: '立即升级'
  };

  componentDidMount() {
    this.checkUpdate();
  }

  /**
   * 检查版本是否需要更新
   */
  checkUpdate = () => {
    request(`/client/version/${clientName}`, {
      urlPrefix: '/api/common'
    }).then(data => {
      // console.log(data, 'data');
      if (data) {
        const { versionCode, version, promote, upgradePrompt } = data;
        // 判断是否需要更新以及更新方式
        if (currentVersion < version && promote !== 0) {
          this.setState({
            versionCode,
            promote,
            updateInfo: upgradePrompt.split('|'),
            isVisible: true
          });
        }
      }
    });
  };

  /**
   * 安卓升级
   */
  updateAndroid = () => {};

  /**
   * 安卓ios
   */
  updateIOS = () => {};

  /**
   * 点击升级
   */
  update = () => {
    const { status } = this.state;
    if (status !== 'downloading') {
      if (Platform.OS === 'ios') {
        this.updateIOS();
      } else {
        this.updateAndroid();
      }
    }
  };

  /**
   * 隐藏modal
   */
  hideModal = () => {
    this.setState({
      isVisible: false
    });
  };

  /**
   * 按下背景时调用
   */
  onBackdropPress = () => {
    const { promote } = this.state;
    if (promote !== 2) {
      // 不强制升级时可以关闭modal
      this.hideModal();
    }
  };

  render() {
    const { isVisible, versionCode, updateInfo, title, btnText, promote } = this.state;
    const updateDetail = updateInfo.map((item, index) => (
      <Text style={styles.txt} key={String(index)}>
        {item}
      </Text>
    ));
    return (
      <Modal isVisible={isVisible} backdropOpacity={0.5} onBackdropPress={this.onBackdropPress}>
        <Flex justify='center'>
          <Flex direction='column' justify='center' align='center' style={styles.container}>
            <Image source={bg} style={styles.bg} />
            <Flex style={styles.content} direction='column' align='center'>
              <View style={styles.seperate} />
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.version}>{versionCode}</Text>
              <ScrollView style={styles.inner}>{updateDetail}</ScrollView>
              <Divider color='#c0c0c0' />
              <TouchableOpacity onPress={this.update}>
                <View style={styles.btn}>
                  <Text style={styles.btnTxt}>{btnText}</Text>
                </View>
              </TouchableOpacity>
            </Flex>
            {promote === 1 ? (
              <TouchableOpacity style={styles.close} onPress={this.hideModal}>
                <Flex justify='center' align='center' style={styles.closeInner}>
                  <Image source={closeIcon} style={styles.closeIcon} />
                </Flex>
              </TouchableOpacity>
            ) : null}
          </Flex>
        </Flex>
      </Modal>
    );
  }
}

export default UpdateTip;
