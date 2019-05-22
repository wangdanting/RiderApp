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
- 状态管理：[redux](https://redux.js.org/)、[react-redux](https://react-redux.js.org/)、[redux-thunk](https://github.com/reduxjs/redux-thunk)、
- 使用请求：[axios](https://github.com/axios/axios)
- 类型检查：[prop-types](https://www.npmjs.com/package/prop-types)
- mock：[mockjs](http://mockjs.com/)
- 样式插件：[react-native-extended-stylesheet](https://www.npmjs.com/package/react-native-extended-stylesheet)
- 搭建环境：[babel-eslint](https://github.com/babel/babel-eslint)、[eslint](https://eslint.org/)、[prettier](https://prettier.io/)、[husky](https://www.npmjs.com/package/husky)、[lint-staged](https://www.npmjs.com/package/lint-staged)

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

## 路由和导航

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