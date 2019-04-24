import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import DashedDivider from '../DashedDivider';
import styles from './style';

const daigouIcon = require('./images/ic_daigou.png');
const moneyIcon = require('./images/ic-money-24.png');

const Daigou = () => (
  <Fragment>
    <DashedDivider />
    <View style={styles.container}>
      <Flex align='start'>
        <Image source={daigouIcon} style={styles.daigouIcon} />
        <Text style={styles.detailTxt}>
          百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶
          百事可乐 一瓶 百事可乐 一瓶 百事可乐 一瓶
        </Text>
      </Flex>
      <Flex style={styles.estimate}>
        <Image source={moneyIcon} style={styles.moneyIcon} />
        <Text style={styles.feeTitle}>预估费</Text>
        <Text style={styles.fee}>30元</Text>
      </Flex>
    </View>
  </Fragment>
);

export default Daigou;
