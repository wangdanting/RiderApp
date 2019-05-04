import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Flex } from '@ant-design/react-native';
import Modal from 'react-native-modal';
import Divider from '@/components/Divider';
import config from '@/config';
import { request } from '@/utils';
import styles from './style';

const { clientNameAndroid, clientNameIOS } = config;
const clientName = Platform.OS === 'android' ? clientNameAndroid : clientNameIOS;

const bg = require('./image/pic.png');
const closeIcon = require('./image/ic-close.png');

class UpdateTip extends PureComponent {
  state = {
    status: 'before', // 状态 'before' 下载前 'downloading'下载中 'failure'下载失败
    isVisible: true, // 是否显示modal框
    versionCode: 'v1.2.1', // 外部版本号
    updateInfo: [
      '主页全选改版',
      '主页全选改版',
      '性能优化性能优化性能优化性能优化性能优化性能优化性能优化'
    ],
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
      if (data) {
        const { versionCode } = data;
        this.setState({
          versionCode
        });
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

  render() {
    const { isVisible, versionCode, updateInfo, title, btnText } = this.state;
    const updateDetail = updateInfo.map((item, index) => (
      <Flex style={styles.item} align='start' key={String(index)}>
        <View style={styles.dot} />
        <Text style={styles.txt}>{item}</Text>
      </Flex>
    ));
    return (
      <Modal isVisible={isVisible}>
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
            <TouchableOpacity style={styles.close} onPress={this.hideModal}>
              <Flex justify='center' align='center' style={styles.closeInner}>
                <Image source={closeIcon} style={styles.closeIcon} />
              </Flex>
            </TouchableOpacity>
          </Flex>
        </Flex>
      </Modal>
    );
  }
}

export default UpdateTip;
