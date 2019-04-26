import axios from 'axios';
import config from '@/config';
import Storage from '../storage';
import { handleNoCommontError, handleCommonError } from './errorHandle';
import { md5, appKey } from '@/utils';
import { store } from '@/index';
import setLoading from '@/actions/global';

const { host, urlPrefix, authKey, errorMsg } = config;

const request = async (url, options = {}) => {
  const { CancelToken } = axios;
  const source = CancelToken.source();
  const Authorization = await Storage.get(authKey);
  // 默认参数
  const defaultOptions = {
    headers: {
      Authorization,
      appKey,
      sign: md5(options.data)
    },
    timeout: 30000,
    cancelToken: source.token
  };

  // 按照条件覆盖掉默认header
  const newOptions = options;
  newOptions.headers = {
    ...defaultOptions.headers,
    ...options.headers
  };

  const configs = { ...defaultOptions, ...newOptions };
  const newUrl = `${host}${options.urlPrefix || urlPrefix}${url}`;
  // 开始loading
  if (!options.noLoading) {
    store.dispatch(setLoading(true));
  }
  return axios(newUrl, configs);
};

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    store.dispatch(setLoading(false));
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    const { response } = error;
    // 请求有响应
    if (response) {
      const { status, data } = response;
      data.message = data.message || errorMsg;
      if (status === 400) {
        handleCommonError(data);
      } else {
        handleNoCommontError(data);
      }
    }
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);

export default request;
