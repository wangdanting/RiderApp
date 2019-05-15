import React, { PureComponent } from 'react';
import { Platform } from 'react-native';
import config from '@/config';
import { request } from '@/utils';
import UpdateVersion from '@iwubida/react-native-update-version';

// 区分客户端版本
const { clientNameAndroid, clientNameIOS, appId } = config;
const clientName = Platform.OS === 'android' ? clientNameAndroid : clientNameIOS;

class UpdateTip extends PureComponent {
  state = {
    promote: 0, // 更新方式(1升级，0不升级，2强制升级)
    version: 1, // 内部版本号
    versionCode: 'v1.0.0', // 外部版本号
    updateInfo: '', // 升级信息
    clientUrl: '' // 下载地址
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
        const { versionCode, version, promote, upgradePrompt, clientUrl } = data;
        this.setState({
          version,
          versionCode,
          promote,
          clientUrl,
          updateInfo: upgradePrompt
        });
      }
    });
  };

  render() {
    const { version, versionCode, updateInfo, promote, clientUrl } = this.state;
    return (
      <UpdateVersion
        appleId={appId}
        version={version}
        versionCode={versionCode}
        promote={promote}
        clientUrl={clientUrl}
        updateInfo={updateInfo}
      />
    );
  }
}

export default UpdateTip;
