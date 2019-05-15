import React, { PureComponent } from 'react';
import { SafeAreaView, Text, BackHandler } from 'react-native';
import { WingBlank } from '@ant-design/react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class Protocol extends PureComponent {
  static navigationOptions = {
    title: '法律条款和隐私政策'
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WingBlank>
          <Text style={styles.title}>法律条款和隐私政策</Text>
          <Text style={styles.txt}>
            您在使用骑士星球产品或服务前，请认真阅读并充分了解相关法律条款、平台规则及用户隐私政策（可在“我的
            &gt; 法律条款”
            中查找并阅读）。当您点击同意，即表示您已经理解并同意该条款，该条款将构成对您具有法律约束力的法律文件。
          </Text>
          <Text style={styles.txt}>用户隐私政策主要包含以下内容：</Text>
          <Text style={styles.txt}>
            1. 个人信息（手机号、姓名、身份证明、面部识别特征、车辆、位置等）
          </Text>
          <Text style={styles.txt}>2. 设备权限（位置、通讯录、麦克风、相机等）的调用</Text>
          <Text style={styles.txt}>
            您在使用骑士星球产品或服务前，请认真阅读并充分了解相关法律条款、平台规则及用户隐私政策（可在“我的
            &gt; 法律条款”
            中查找并阅读）。当您点击同意，即表示您已经理解并同意该条款，该条款将构成对您具有法律约束力的法律文件。
          </Text>
          <Text style={styles.txt}>用户隐私政策主要包含以下内容：</Text>
          <Text style={styles.txt}>
            1. 个人信息（手机号、姓名、身份证明、面部识别特征、车辆、位置等）
          </Text>
          <Text style={styles.txt}>2. 设备权限（位置、通讯录、麦克风、相机等）的调用</Text>
        </WingBlank>
      </SafeAreaView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  title: {
    color: '$headingColor',
    fontSize: '40rem',
    lineHeight: '110rem'
  },
  txt: {
    color: '$textColor',
    fontSize: '30rem',
    lineHeight: '50rem'
  }
});

export default Protocol;
