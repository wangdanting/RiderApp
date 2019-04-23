import React from 'react';
import { View, Image } from 'react-native';
import AddressInfo from '@/components/AddressInfo';
import Tag from '@/components/Tag';
import Daigou from '@/components/Daigou';
import Separate from '@/components/Separate';
import Steps from '@/components/Steps';
import DescriptionList from '@/components/DescriptionList';
import styles from './style';

const { SeparateItem } = Separate;
const abnormalIcon = require('./images/sign_abnormal.png');

const quInfo = {
  title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
  subtitle: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡'
};
const songInfo = {
  title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
  name: '李子坝'
};

const OrderDetail = () => (
  <View style={styles.page}>
    <View style={styles.container}>
      <Image source={abnormalIcon} style={styles.abnormal} />
      <Tag />
      <AddressInfo quInfo={quInfo} songInfo={songInfo} />
      <Daigou />
    </View>
    <Separate>
      <SeparateItem title='用时50分钟' />
      <SeparateItem title='距离5.2km' />
      <SeparateItem title='¥ 12.6' color='red' />
    </Separate>
    <Steps />
    <DescriptionList />
  </View>
);

export default OrderDetail;
