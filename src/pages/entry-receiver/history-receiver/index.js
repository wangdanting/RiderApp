import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import commonStyles from '@/common/styles/commonStyles';
import styles from './style';

const closeIcon = require('@/common/images/ic_close_30.png');

const HistoryReceiver = () => (
  <View style={styles.container}>
    <TouchableOpacity style={[styles.item, commonStyles.borderBottom]}>
      <Flex>
        <Text style={styles.mobile}>18875082742</Text>
        <Text style={styles.name}>王丹婷</Text>
      </Flex>
      <Text style={styles.addr}>重庆市渝中区李子坝抗战遗址公园生生公馆34号4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.item, commonStyles.borderBottom]}>
      <Flex>
        <Text style={styles.mobile}>18875082742</Text>
        <Text style={styles.name}>王丹婷</Text>
      </Flex>
      <Text style={styles.addr}>重庆市渝中区李子坝抗战遗址公园生生公馆34号4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.item}>
      <Flex>
        <Text style={styles.mobile}>18875082742</Text>
        <Text style={styles.name}>王丹婷</Text>
      </Flex>
      <Text style={styles.addr}>重庆市渝中区李子坝抗战遗址公园生生公馆34号4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.close}>
      <Image source={closeIcon} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default HistoryReceiver;
