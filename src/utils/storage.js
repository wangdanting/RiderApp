import AsyncStorage from '@react-native-community/async-storage';

const set = (key, value, callBack) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(value), callBack);
  } catch (error) {}
};

const get = (key, defaultValue) => {
  try {
    return AsyncStorage.getItem(key).then(value =>
      value !== null ? JSON.parse(value) : defaultValue
    );
  } catch (error) {
    return '';
  }
};

const remove = (key, callBack) => {
  try {
    AsyncStorage.removeItem(key, callBack);
  } catch (error) {}
};

const clear = callBack => {
  try {
    AsyncStorage.clear(callBack);
  } catch (error) {}
};

const getAllKeys = callBack => {
  try {
    AsyncStorage.getAllKeys(callBack);
  } catch (error) {}
};

export default {
  set,
  get,
  remove,
  clear,
  getAllKeys
};
