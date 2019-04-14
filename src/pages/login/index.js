import React, { PureComponent } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, Toast } from '@ant-design/react-native';
import styles from './style';
import CommonStyles from '@/common/styles/commonStyles';
import { regMobile, Storage, request } from '@/utils';
import config from '@/config';

const { authKey } = config;

let countdownInterval = null; // 计时器

class Login extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    mobile: '', // 手机号
    validateCode: '', // 验证码
    isActiveCodeBtn: true, // 是否激活发送验证码按钮
    countdown: 60, // 倒计时,
    isSubmiting: false // 提交按钮的loading
  };

  componentWillUnmount() {
    clearInterval(countdownInterval);
  }

  /**
   *  隐藏软键盘
   */
  hideKeyboard = () => {
    Keyboard.dismiss();
  };

  /**
   *  验证手机号码
   */
  isOkMobile = mobile => {
    return regMobile.test(mobile);
  };

  /**
   *  设置手机号码
   */
  handleChangeMobile = mobile => {
    if (mobile.length === 11) {
      this.hideKeyboard();
      if (!this.isOkMobile(mobile)) {
        Toast.info('请输入正确的手机号码！');
      }
    } else {
      const { isActiveCodeBtn } = this.state;
      if (!isActiveCodeBtn) {
        clearInterval(countdownInterval);
        this.setState({
          isActiveCodeBtn: true
        });
      }
    }
    this.setState({
      mobile
    });
  };

  /**
   *  设置验证码
   */
  handleChangeSMS = validateCode => {
    this.setState({
      validateCode
    });
    if (validateCode.length === 4) {
      this.hideKeyboard();
    }
  };

  /**
   *  发送验证码
   */
  sendSMS = () => {
    const { mobile } = this.state;
    if (!this.isOkMobile(mobile)) {
      Toast.info('请输入正确的手机号码！');
      return;
    }
    request('/sessions/send_valid_code', {
      data: {
        mobile
      },
      method: 'post'
    }).then(() => {
      Toast.info('验证码已发送，请注意查收！');
      this.startCountdown();
    });
  };

  /**
   *  开始倒计时
   */
  startCountdown = () => {
    let countdown = 60;
    this.setState({
      isActiveCodeBtn: false
    });
    countdownInterval = setInterval(() => {
      countdown -= 1;
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        this.setState({
          countdown: 60,
          isActiveCodeBtn: true
        });
      } else {
        this.setState({
          countdown
        });
      }
    }, 1000);
  };

  /**
   *  验证登录满足条件
   */
  check = () => {
    const { mobile, validateCode } = this.state;
    if (!this.isOkMobile(mobile)) {
      Toast.info('请输入正确的手机号码！');
    } else if (validateCode.length < 4) {
      Toast.info('请输入正确的验证码！');
    } else {
      this.login();
    }
  };

  /**
   *  登录
   */
  login = () => {
    const { navigation } = this.props;
    const { mobile, validateCode } = this.state;
    const params = {
      mobile,
      validateCode,
      deviceType: Platform.OS,
      deviceToken: '2bcb2fcbcec5442ca2815f54e63196d7'
    };
    this.setState({
      isSubmiting: true
    });
    request('/sessions/create_token', {
      method: 'post',
      data: params
    }).then(({ result }) => {
      Storage.set(authKey, result);
      this.setState({
        isSubmiting: false
      });
      navigation.navigate('App');
    });
  };

  /**
   *  跳转用户协议
   */
  goProtocol = () => {
    const { navigation } = this.props;
    navigation.navigate('Protocol');
  };

  render() {
    const { countdown, isActiveCodeBtn, isSubmiting } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity activeOpacity={1.0} onPress={this.hideKeyboard} style={styles.wrap}>
          <Text style={styles.title}>登录</Text>
          <View style={styles.form}>
            <Text style={styles.label}>手机号码</Text>
            <View style={[styles.item, CommonStyles.borderBottom]}>
              <TextInput
                placeholder='请输入您的手机号码'
                keyboardType='phone-pad'
                maxLength={11}
                style={styles.input}
                onChangeText={this.handleChangeMobile}
              />
              {isActiveCodeBtn ? (
                <TouchableOpacity onPress={this.sendSMS}>
                  <Text style={styles.sms_txt}>发送验证码</Text>
                </TouchableOpacity>
              ) : (
                <Text style={[styles.sms_txt, styles.countDown]}>
                  {countdown}
                  s后重新获取
                </Text>
              )}
            </View>
            <Text style={styles.label}>验证码</Text>
            <View style={[styles.item, CommonStyles.borderBottom]}>
              <TextInput
                placeholder='请输入4位验证码'
                keyboardType='numeric'
                maxLength={4}
                style={styles.input}
                onChangeText={this.handleChangeSMS}
              />
            </View>
          </View>
          <Button
            type='primary'
            size='large'
            loading={isSubmiting}
            style={CommonStyles.largeBtn}
            activeStyle={CommonStyles.btnActiveStyle}
            onPress={this.check}
          >
            登录
          </Button>
          <TouchableOpacity style={styles.protocol} onPress={this.goProtocol}>
            <Text style={styles.protocol_txt}>
              登录代表您已同意
              <Text style={styles.protocol_inner}>《用户协议》</Text>
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Login;
