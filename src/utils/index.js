import forge from 'node-forge';
import { Linking, Alert } from 'react-native';
import { Toast } from '@ant-design/react-native';

export { default as request } from './request';
export { default as Storage } from './storage';
export { default as NavigationService } from './navigationService';

/**
 * md5转换
 * @param {json} reqBodyParms request的参数
 */
const appSecret = '8Vp9j3SBot9ZXj1Ef77jvRpbsUr5HCCo';
export const appKey = '1000';
export const md5 = reqBodyParms => {
  const sign = `appKey=${appKey}&appSecret=${appSecret}&body=${JSON.stringify(reqBodyParms)}`;
  const md = forge.md.md5.create();
  md.update(sign);
  const mdStr = md.digest().toHex();
  return mdStr;
};

/**
 *  手机号验证正则
 */
export const regMobile = /^1\d{10}/;

/**
 *  手机号分隔
 * @param {string} mobile 手机号
 * @returns '188-8888-8888'格式的手机号
 * @example
 * mobileFormat('18888888888')
 * // => '188-8888-8888'
 */
export const formatMobile = mobile => {
  if (!regMobile.test(mobile)) {
    return '';
  }
  return String(mobile).replace(/(^\d{3}|\d{4}\B)/g, '$1 ');
};

/**
 *  判断版本号格式是否正确
 * @param {string} code 版本号
 * @returns '1.3' 或者 '1.3.4' 格式的版本号
 * @example
 * isOkVersionCode('1.3.4')
 * // => true
 */
export const isOkVersionCode = code => {
  const reg = /^(\d{1,4}\.)+\d{1,4}$/;
  return reg.test(`${code}`);
};

/**
 *  拨打电话
 * @param {string} phone 版本号
 * @example
 * call('18888888888')
 */
export const call = phone => {
  const url = `tel:${phone}`;
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        return Alert.alert('提示', `您的设备不支持该功能，请手动拨打 ${phone}`, [{ text: '确定' }]);
      }
      return Linking.openURL(url);
    })
    .catch(err => Toast.info(`出错了：${err}`, 1.5));
};
