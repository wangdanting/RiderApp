# 一个基础的react-native项目

##### 下面将解释该App实现的过程和功能 (`/src/components/`下每个包装的组件都有单独的demo介绍使用)

## 搭建环境（https://facebook.github.io/react-native/docs/getting-started）

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

## JavaScript代码检测工具 `ESLint` (.eslintrc.js 配置了检测规则)

- 运用'babel-eslint'解释器，一个对Babel解析器的包装，使其能够与 ESLint 兼容。
- 运用了'airbnb', 'eslint-plugin-prettier', 'eslint-plugin-compat'继承规则。

## Prettier（.prettierrc 配置了规格）

- 运用了Prettier让代码风格统一

## 对提交的代码进行检测

- 运用 lint-staged + husky 对提交的代码进行检测

## 路由和导航

- 运用 `react-navigation` 插件实现整个App程序的路由和导航跳转功能

## 