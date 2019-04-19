import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import styles from './style';

const DescriptionList = () => (
  <View>
    <Text style={styles.title}>订单信息</Text>
    <View style={styles.content}>
      <Flex style={styles.item}>
        <Text style={styles.label}>订单类别</Text>
        <Text style={styles.value}>普通订单</Text>
      </Flex>
      <Flex style={styles.item}>
        <Text style={styles.label}>订单类别</Text>
        <Text style={styles.value}>普通订单</Text>
      </Flex>
    </View>
  </View>
);

export default DescriptionList;
