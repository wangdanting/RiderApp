import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  NativeModules,
  DeviceEventEmitter
} from 'react-native';
import VersionNumber from 'react-native-version-number';
import Modal from 'react-native-modal';
import config from '@/config';
import { request, isOkVersionCode } from '@/utils';
import styles from './style';

const { RNUpdateVersionModule } = NativeModules;

// 区分客户端版本
const { clientNameAndroid, clientNameIOS, appId } = config;
const clientName = Platform.OS === 'android' ? clientNameAndroid : clientNameIOS;

// 获取版本信息
const currentVersion = VersionNumber.buildVersion; // 版本号
const currentVersionCode = VersionNumber.appVersion; // 版本名称

const bg = require('./image/pic.png');
const closeIcon = require('./image/ic-close.png');

class UpdateTip extends PureComponent {
  state = {
    status: 'unDownloading', // 状态 'unDownloading' 没在下载中 'downloading'下载中'
    isVisible: false, // 是否显示modal框
    promote: 0, // 更新方式(1升级，0不升级，2强制升级)
    versionCode: 'v1.2.1', // 外部版本号
    updateInfo: [], // 升级信息
    clientUrl: '', // 下载地址
    title: '升级到新版本',
    btnText: '立即升级'
  };

  componentDidMount() {
    this.checkUpdate();
  }

  componentWillUnmount() {
    // 回收监听进度
    DeviceEventEmitter.removeListener('DownloadApkProgress');
  }

  /**
   * 检查版本是否需要更新
   */
  checkUpdate = () => {
    request(`/client/version/${clientName}`, {
      urlPrefix: '/api/common'
    }).then(data => {
      if (data) {
        const { versionCode, version, promote, upgradePrompt, clientUrl } = data;
        // 判断是否需要更新以及更新方式
        if (currentVersion < version && promote !== 0 && this.isAppStoreHasNewVersion()) {
          this.setState({
            versionCode,
            promote,
            clientUrl,
            updateInfo: upgradePrompt.split('|'),
            isVisible: true
          });
        }
      }
    });
  };

  /**
   * 检查ios appStore 是否有新版本
   */
  isAppStoreHasNewVersion = async () => {
    if (Platform.OS === 'ios') {
      await request(`/lookup?id=${appId}`, {
        host: 'https://itunes.apple.com',
        urlPrefix: '/cn'
      }).then(({ results }) => {
        if (Array.isArray(results) && results.length) {
          const { version } = results[0];
          // 判断版本格式是否正确
          if (isOkVersionCode(version) && isOkVersionCode(currentVersionCode)) {
            if (version > currentVersionCode) {
              return true;
            }
          }
        }
        return false;
      });
    }
    return false;
  };

  /**
   * 安卓升级
   */
  updateAndroid = () => {
    const { clientUrl } = this.state;
    RNUpdateVersionModule.update(clientUrl);
    DeviceEventEmitter.addListener('DownloadApkProgress', arg => {
      const percent = Math.floor((arg.current / arg.total) * 100) || 0;
      this.setState({
        status: 'downloading',
        title: '升级中...',
        btnText: `${percent}%...`
      });
      if (arg.error) {
        this.setState({
          status: 'unDownloading',
          title: '下载失败',
          btnText: '重新下载'
        });
      }
      if (arg.done) {
        this.setState({
          status: 'unDownloading',
          title: '升级成功',
          btnText: '重新升级'
        });
      }
    });
  };

  /**
   * 安卓ios
   */
  updateIOS = () => {
    RNUpdateVersionModule.update(`${appId}`);
  };

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
        <View style={styles.container}>
          <Image source={bg} style={styles.bg} />
          <View style={styles.content}>
            <View style={styles.seperate} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.version}>{versionCode}</Text>
            <ScrollView style={styles.inner}>{updateDetail}</ScrollView>
            <View style={styles.divider} />
            <TouchableOpacity onPress={this.update}>
              <View style={styles.btn}>
                <Text style={styles.btnTxt}>{btnText}</Text>
              </View>
            </TouchableOpacity>
          </View>
          {promote === 1 ? (
            <TouchableOpacity style={styles.close} onPress={this.hideModal}>
              <View justify='center' align='center' style={styles.closeInner}>
                <Image source={closeIcon} style={styles.closeIcon} />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </Modal>
    );
  }
}

export default UpdateTip;
