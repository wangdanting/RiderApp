import React from 'react';
import { Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import styles from './style';

const Img = require('./images/no_data.png');

const EmptySearch = () => (
  <Flex style={styles.container} direction='column' justify='center'>
    <Image source={Img} style={styles.img} resizeMode='contain' />
    <Text style={styles.title}>没有数据哦～</Text>
  </Flex>
);

export default EmptySearch;
