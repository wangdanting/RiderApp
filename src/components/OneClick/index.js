import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import styles from './style';

const OneClick = () => (
  <Flex style={styles.yijian} justify='between'>
    <View style={styles.orderId}>
      <Text style={styles.orderIdTxt}>39</Text>
    </View>
    <Text style={styles.orderIdLabel}>一键下单单号</Text>
  </Flex>
);

export default OneClick;
