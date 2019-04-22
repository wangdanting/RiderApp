import forge from 'node-forge';

export { default as request } from './request';
export { default as Storage } from './storage';

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
