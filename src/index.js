import React from 'react';
import { YellowBox, Dimensions } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppContainer from './router/index';
import rootReducer from './reducers';
import variables from './common/styles/variables';

// 移除 "Remote debugger is in a background tab" warning
YellowBox.ignoreWarnings(['Remote debugger']);

// 配置redux中间键
const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

// style里面的尺寸大小都写与2倍图设计稿一样(以宽度750px为基础)，eg:设计稿为20px,style里面写20rem
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 750, ...variables });

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
