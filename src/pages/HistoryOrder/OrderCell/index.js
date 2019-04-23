import React from 'react';
import { View, Text } from 'react-native';
import { Flex, WingBlank } from '@ant-design/react-native';
import Tag from '@/components/Tag';
import OneClick from '@/components/OneClick';
import AddressInfo from '@/components/AddressInfo';
import Separate from '@/components/Separate';

import styles from './style';

const { SeparateItem } = Separate;

const quInfo = {
  title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
  subtitle: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡'
};
const songInfo = {
  title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
  name: '李子坝'
};

const OrderCell = () => (
  <View style={styles.container}>
    <WingBlank>
      <Flex justify='between'>
        <Flex>
          <Text style={styles.order}>订单</Text>
          <Text style={styles.orderId}>2343</Text>
        </Flex>
        <Text style={styles.time}>2018-12-23</Text>
      </Flex>
      <Tag />
      <OneClick />
      <AddressInfo quInfo={quInfo} songInfo={songInfo} />
    </WingBlank>
    <Separate>
      <SeparateItem title='用时50分钟' />
      <SeparateItem title='距离5.2km' />
      <SeparateItem title='¥ 12.6' color='red' />
    </Separate>
  </View>
);

export default OrderCell;
