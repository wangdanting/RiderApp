# 一个基础的react-native Demo

##### 一款含有基础功能页面的react-native Demo，兼容Android 和 iOS，下面将解释该App实现的过程和功能 (`/src/components/`下每个包装的组件都有单独的`demo`介绍使用)

<p float="left">

<img src="./ignorePack/r-login.jpg" width="200px">

<img src="./ignorePack/r-home.jpg" width="200px">

<img src="./ignorePack/r-person.jpg" width="200px">

<img src="./ignorePack/r-map.jpg" width="200px">

</p>

## 技术栈

- 使用框架：[react](https://reactjs.org/)、[react-native](https://facebook.github.io/react-native/)、[react-navigation](https://reactnavigation.org/)
- UI组件库：[@ant-design/react-native](https://rn.mobile.ant.design/index-cn)
- 状态管理：[redux](https://redux.js.org/)、[react-redux](https://react-redux.js.org/)、[redux-thunk](https://github.com/reduxjs/redux-thunk)、
- 使用请求：[axios](https://github.com/axios/axios)
- 类型检查：[prop-types](https://www.npmjs.com/package/prop-types)
- mock：[mockjs](http://mockjs.com/)
- 样式插件：[react-native-extended-stylesheet](https://www.npmjs.com/package/react-native-extended-stylesheet)
- 搭建环境：[babel-eslint](https://github.com/babel/babel-eslint)、[eslint](https://eslint.org/)、[prettier](https://prettier.io/)、[husky](https://www.npmjs.com/package/husky)、[lint-staged](https://www.npmjs.com/package/lint-staged)

## 预览

```shell
  git clone git@github.com:wangdanting/RiderApp.git
  cd RiderApp
  yarn install
```

Xcode模拟器，需要安装进入ios文件下安装pod

```shell
  cd ios
  pod install
```

Xcode模拟器

```shell
  yarn ios
```

Android(需要用USB连接Android手机)

```shell
  yarn android
```

## 搭建环境  [官网地址](https://facebook.github.io/react-native/docs/getting-started)

电脑安装依赖(开发平台：macOS； 目标平台：iOS)

```shell
  brew install node
  brew install watchman
```

创建新项目

```shell
  react-native init RiderApp
```

编译并运行 React Native 应用

```shell
  //在电脑模拟器上
  cd RiderApp
  react-native run-ios

  //在Android手机上
  cd RiderApp
  react-native run-android
```

## 登录帐号(可以不发送验证码)

```shell
  手机号：17789522217
  密码：123456
```

## JavaScript代码检测工具 `ESLint` (.eslintrc.js 配置了检测规则)，下面👇为案例

- 运用'babel-eslint'解释器，一个对Babel解析器的包装，使其能够与 ESLint 兼容。
- 运用了'airbnb', 'eslint-plugin-prettier', 'eslint-plugin-compat'继承规则。

```javascript
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:compat/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react', 'compat'],
  rules: {},
  settings: {}
};
```

## Prettier（.prettierrc 配置了规格）

运用了Prettier让代码风格统一，下面👇为案例

```javascript
  {
  "singleQuote": true,
  "printWidth": 100,
  "jsxSingleQuote": true,
  "overrides": [
    {
      "files": [".prettierrc", ".babelrc"],
      "options": { "parser": "json" }
    }
  ]
}
```

## 对提交的代码进行最后检测（package.json中配置）

运用 lint-staged + husky 对提交的代码进行检测，下面👇为案例

```javascript
 "lint-staged": {
    "**/*.{js, json, md}": [
      "prettier --write",
      "git add"
    ],
    "**/*.{js, jsx}": [
      "yarn lint-staged:js",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint-staged"
    }
  },
```

可以用下面👇命令行进行代码格式检测

```shell
  yarn lint:fix
```

## 路由

- 运用 `react-navigation` 插件实现整个App程序的路由和导航跳转功能
- 在`/src/router`下配置导航

```javascript
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '@/pages/AuthLoading';
import Login from '@/pages/Login';
import Order from '@/pages/Order';
import OrderDetail from '@/pages/Order/OrderDetail';

const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: 'none'
  }
);

const AppStack = createStackNavigator({
  //在这下面添加新页面
  Order,
  OrderDetail
});

const AppNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
```

## 导航

- 占位

## 样式

运用`react-native-extended-stylesheet` 替换React Native的StyleSheet，可以实现媒体查询、变量、动态主题、相对单位、百分
比、数学运算、缩放。

在根目录中定义

```javascript
  import EStyleSheet from 'react-native-extended-stylesheet';
  // style里面的尺寸大小都写与2倍图设计稿一样(以宽度750px为基础)，eg:设计稿为20px,style里面写20rem
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({ $rem: entireScreenWidth / 750, ...variables });
```

下面👇为如何使用，(用法和StyleSheet差不多)

```javascript
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: '60rem'
  },
  wrap: {
    flex: 1
  }
});

export default styles;
```

## 请求

```javascript
import { request } from '@/utils';
  request('/sessions/create_token', {
      method: 'post',
      data: params,
      noLoading: true //是否loading
    }).then(({ result }) => {
    });
```

## 相关页面

<p float="left">

<img src="/ignorePack/r-history.jpg" width="200px">

<img src="/ignorePack/r-modal.jpg" width="200px">

<img src="/ignorePack/r-search-1.jpg" width="200px">

<img src="/ignorePack/r-search.jpg" width="200px">

<img src="/ignorePack/r-tab.jpg" width="200px">

</p>

## 模版

```javascript
- actions (redux actions)
- common (公共资源)
  - images (公共图片)
  - styles (公共样式)
- components (封装组件)
  - AddressInfo(收件寄件地址组件)
  - Button(按钮组件)
  - DashedDivider(虚线)
  - DateRangePicker(日期范围组件)
  - DescriptionList(描述列表组件)
  - Divider(分割线)
  - EmptyOrder(空列表占位)
  - EmptySearch(空查询结果占位)
  - FlatList(列表封装,实现下拉刷新，上拉加载)
  - Modal(模态框)
  - OneClick(一键下单组件)
  - PageLoading(loading组件，垂直居中)
  - SearchInput(搜索框)
  - Separate (分隔内容组件)
  - StatusBar(状态栏组件)
  - Steps(步骤条)
  - Tag(Tag)
  - UpdateTip(升级提示)
- config (环境配置)
- pages (业务)
- reducers (reducers)
- router (路由配置)
- utils
  - request (封装请求)
  - storage (封装Storage)
  - index (公共方法)
- app.js
- index.js
```