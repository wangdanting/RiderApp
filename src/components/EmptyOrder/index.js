import React from 'react';
import { Flex } from '@ant-design/react-native';
import { Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const noOrder = require('./images/no_order.png');

const EmptyOrder = () => (
  <Flex justify='center' align='center' style={styles.container}>
    <Image source={noOrder} style={styles.noOrder} />
  </Flex>
);

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  noOrder: {
    width: '160rem',
    height: '202rem'
  }
});

export default EmptyOrder;
