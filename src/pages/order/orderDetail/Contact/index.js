import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Divider from '@/components/Divider';

const shopIcon = require('../images/contact_shop.png');
const userIcon = require('../images/contact_user.png');

class Contact extends PureComponent {
  abc = () => {};

  render() {
    return (
      <Flex style={styles.container}>
        <TouchableOpacity style={styles.item}>
          <Flex justify='center'>
            <Image style={styles.icon} source={shopIcon} />
            <Text style={styles.txt}>联系商家</Text>
          </Flex>
        </TouchableOpacity>
        <Divider type='vertical' />
        <TouchableOpacity style={styles.item}>
          <Flex justify='center'>
            <Image style={styles.icon} source={userIcon} />
            <Text style={styles.txt}>联系用户</Text>
          </Flex>
        </TouchableOpacity>
      </Flex>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '110rem',
    borderTopWidth: '1rem',
    borderColor: '$borderColorBase'
  },
  item: {
    flex: 1
  },
  txt: {
    fontSize: '30rem',
    color: '$textColor',
    textAlign: 'center'
  },
  icon: {
    marginRight: '15rem',
    width: '30rem',
    height: '30rem'
  }
});

export default Contact;
