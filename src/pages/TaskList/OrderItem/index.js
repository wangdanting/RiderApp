import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { WingBlank, WhiteSpace } from '@ant-design/react-native';
import AddressInfo from '@/components/AddressInfo';
import StatusBar from '@/components/StatusBar';
import Tag from '@/components/Tag';
import Daigou from '@/components/Daigou';
import Divider from '@/components/Divider';
import Operate from '../Operate';
import styles from './style';

class OrderItem extends PureComponent {
  abc = () => {};

  render() {
    const quInfo = {
      title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
      subtitle: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡'
    };
    const songInfo = {
      title: '李子坝梁山鸡李子坝梁山鸡李子坝梁山鸡',
      name: '李子坝'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.time}>2018-08-20 11:47</Text>
        <View style={styles.content}>
          <WingBlank size='md'>
            <Text style={styles.title}>
              您收到了
              <Text style={styles.name}> 王丹婷 </Text>
              的【待取件】转单申请
            </Text>
            <Divider />
            <WhiteSpace size='lg' />
            <StatusBar time='14:20' status='前取件' money='8.5' />
            <Tag />
            <AddressInfo quInfo={quInfo} songInfo={songInfo} />
            <Daigou />
            <Text style={styles.orderId}>订单号 123</Text>
            <WhiteSpace size='lg' />
          </WingBlank>
          <Operate />
        </View>
      </View>
    );
  }
}

export default OrderItem;
