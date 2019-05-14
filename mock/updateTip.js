import Mock from 'mockjs';

Mock.mock(/\/client\/version/, 'get', {
  versionCode: 'v1.5.3',
  version: 19,
  promote: 1,
  upgradePrompt: '1、支持第三方平台业务。|2、展示第三方平台订单取单编号。',
  clientUrl: 'http://client.download.qishixingqiu.com/0client/express/kp-release-1.5.3.apk'
});
