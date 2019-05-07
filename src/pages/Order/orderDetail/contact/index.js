import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import Divider from '@/components/Divider';
import { call } from '@/utils';
import styles from './style';

const shopIcon = require('../images/contact_shop.png');
const userIcon = require('../images/contact_user.png');

class Contact extends PureComponent {
  static propTypes = {
    merchant: PropTypes.string, // 商家电话
    user: PropTypes.string // 用户电话
  };

  static defaultProps = {
    merchant: '',
    user: ''
  };

  callMerchant = () => {
    const { merchant } = this.props;
    call(merchant);
  };

  callUser = () => {
    const { user } = this.props;
    call(user);
  };

  render() {
    return (
      <Flex style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={this.callMerchant}>
          <Flex justify='center'>
            <Image style={styles.icon} source={shopIcon} />
            <Text style={styles.txt}>联系商家</Text>
          </Flex>
        </TouchableOpacity>
        <Divider type='vertical' />
        <TouchableOpacity style={styles.item} onPress={this.callUser}>
          <Flex justify='center'>
            <Image style={styles.icon} source={userIcon} />
            <Text style={styles.txt}>联系用户</Text>
          </Flex>
        </TouchableOpacity>
      </Flex>
    );
  }
}

export default Contact;
