import React, { PureComponent } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Flex, Toast } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import Modal from '@/components/Modal';
import commonStyles from '@/common/styles/commonStyles';
import Button from '@/components/Button';
import HistoryReceiver from './HistoryReceiver';
import { regMobile, request } from '@/utils';
import styles from './style';

require('../../../mock/entryReceiver');

const shouIcon = require('./images/ic_shou.png');

class entryReceiver extends PureComponent {
  static navigationOptions = {
    title: '录入收货人信息',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }) // 导航
  };

  static defaultProps = {
    navigation: {
      navigate: () => {}
    }
  };

  state = {
    mobile: '', // 电话
    name: '', // 姓名
    historyReceiver: [] // 历史收货人
  };

  /**
   * 电话号码修改
   */
  handleChangeMobile = mobile => {
    this.setState({
      mobile
    });
    if (mobile.length === 11) {
      if (regMobile.test(mobile)) {
        this.getHistoryReceiver(mobile);
      } else {
        Toast.info('请输入正确的手机号码！');
      }
    }
  };

  /**
   * 匹配历史收件人
   */
  getHistoryReceiver = mobile => {
    request('/shop/addr/dest', {
      params: {
        destMobile: mobile
      }
    }).then(({ results }) => {
      this.setState({
        historyReceiver: results
      });
    });
  };

  /**
   * 匹配历史收件人
   */
  chooseHistoryReceiver = () => {
    this.clearHistoryReceiver();
  };

  /**
   * 清除匹配历史收件人
   */
  clearHistoryReceiver = () => {
    this.setState({
      historyReceiver: []
    });
  };

  /**
   * 姓名修改
   */
  handleChangeName = name => {
    this.setState({
      name
    });
  };

  /**
   * 跳转选择收货人地址页面
   */
  goAddress = () => {
    const { navigation } = this.props;
    navigation.navigate('Address');
  };

  render() {
    const { mobile, historyReceiver, name } = this.state;
    return (
      <View style={styles.container}>
        <Flex style={styles.content} align='start'>
          <Image source={shouIcon} style={styles.icon} />
          <View style={styles.info}>
            <Flex style={[styles.item, commonStyles.borderBottom]}>
              <Text style={styles.label}>电话：</Text>
              <TextInput
                placeholder='收件人手机号码'
                style={styles.input}
                value={mobile}
                maxLength={11}
                keyboardType='phone-pad'
                onChangeText={this.handleChangeMobile}
              />
            </Flex>
            <Flex style={[styles.item, commonStyles.borderBottom]}>
              <Text style={styles.label}>姓名：</Text>
              <TextInput
                placeholder='收件人姓名(选填)'
                style={styles.input}
                value={name}
                onChangeText={this.handleChangeName}
              />
            </Flex>
            <TouchableOpacity onPress={this.goAddress}>
              <Flex style={[styles.item, commonStyles.borderBottom]}>
                <Text style={styles.label}>地区：</Text>
                <TextInput placeholder='点击选择' style={styles.input} editable={false} />
                <View style={styles.arrow} />
              </Flex>
            </TouchableOpacity>
            <Flex style={styles.item}>
              <Text style={styles.label}>门牌号：</Text>
              <TextInput placeholder='例：16号楼427室' style={styles.input} />
            </Flex>
            <HistoryReceiver
              data={historyReceiver}
              handleClick={this.chooseHistoryReceiver}
              handleClose={this.clearHistoryReceiver}
            />
          </View>
        </Flex>
        <Button title='保存' type='primary' style={styles.btn} />
        <Modal
          leftText='返回修改'
          rightText='确认保存'
          highLightPosition='right'
          title='收货人信息'
          isVisible={false}
        >
          <Text style={styles.modal}>提交保存前，请确认“收货人信息”录入是否正确！</Text>
        </Modal>
      </View>
    );
  }
}

export default entryReceiver;
