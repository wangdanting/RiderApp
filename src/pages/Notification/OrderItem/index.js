import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WingBlank, Flex } from '@ant-design/react-native';
import commonStyles from '@/common/styles/commonStyles';
import AddressInfo from '@/components/AddressInfo';
import Daigou from '@/components/Daigou';
import styles from './style';

const orderId = '12298787867';

const quInfo = {
  title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
  subtitle: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡'
};
const songInfo = {
  title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
  name: '李子坝'
};

const OrderItem = () => (
  <View style={styles.container}>
    <Text style={styles.time}>2018-08-20 11:47</Text>
    <View style={styles.content}>
      <WingBlank>
        <Flex style={[styles.top, commonStyles.borderBottom]}>
          <Flex style={styles.tag} justify='center' align='center'>
            <Text style={styles.tagTxt}>
              站长
              {'\n'}
              转单
            </Text>
          </Flex>
          <Text style={styles.topTxt}>
            您的【待取件】订单
            <Text style={styles.active}>{` ${orderId} `}</Text>
            被站长转走了
          </Text>
        </Flex>
        <AddressInfo quInfo={quInfo} songInfo={songInfo} />
        <Daigou />
        <TouchableOpacity style={styles.bottom}>
          <Flex>
            <Text style={styles.arrowTxt}>展开</Text>
            <View style={styles.arrow} />
          </Flex>
        </TouchableOpacity>
      </WingBlank>
    </View>
  </View>
);

export default OrderItem;
