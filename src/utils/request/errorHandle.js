import { Toast } from '@ant-design/react-native';
import config from '@/config';
import Storage from '../storage';

const { authKey, errorMsg } = config;

const errorCode = {
  c10002: 10002,
  c10019: 10019,
  c10020: 10020
};

/**
 * 处理未知的错误
 */
export const handleNoCommontError = err => {
  if (!err) {
    Toast.info(errorMsg);
  } else if (err.errorItems && err.errorItems.length > 0 && err.errorItems[0].message) {
    Toast.info(err.errorItems[0].message);
  } else if (err.message) {
    Toast.info(err.message);
  } else {
    Toast.info(err);
  }
};

/**
 * 处理已知的错误
 */
export const handleCommonError = err => {
  const { code } = err;
  switch (code) {
    case errorCode.c10002:
    case errorCode.c10019:
    case errorCode.c10020: {
      // 登录过期
      Storage.remove(authKey);
      Toast.info('登录过期，请重新登录！');
      // 占位
      break;
    }
    default: {
      handleNoCommontError(err);
    }
  }
};
