import React from 'react';
import { View, Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const daigouIcon = require('./images/ic_daigou.png');
const moneyIcon = require('./images/ic-money-24.png');

const Daigou = () => (
  <View style={styles.container}>
    <Flex align='start'>
      <Image source={daigouIcon} style={styles.daigouIcon} />
      <Text style={styles.detailTxt}>
        百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶 百事可乐
        一瓶 百事可乐 一瓶 百事可乐 一瓶
      </Text>
    </Flex>
    <Flex style={styles.estimate}>
      <Image source={moneyIcon} style={styles.moneyIcon} />
      <Text style={styles.feeTitle}>预估费</Text>
      <Text style={styles.fee}>30元</Text>
    </Flex>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    paddingVertical: '30rem'
  },
  daigouIcon: {
    marginRight: '20rem',
    width: '80rem',
    height: '28rem'
  },
  detailTxt: {
    flex: 1,
    fontSize: '30rem',
    color: '$headingColor'
  },
  estimate: {
    paddingTop: '20rem'
  },
  moneyIcon: {
    marginLeft: '100rem',
    width: '24rem',
    height: '24rem'
  },
  feeTitle: {
    marginLeft: '10rem',
    color: '#8fa3b6',
    fontSize: '24rem'
  },
  fee: {
    marginLeft: '5rem',
    color: '#8fa3b6',
    fontSize: '24rem'
  }
});

export default Daigou;
