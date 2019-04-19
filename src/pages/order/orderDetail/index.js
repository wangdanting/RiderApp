import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Tag from '@/components/Tag';
import StatusBar from '@/components/StatusBar';
import AddressInfo from '@/components/AddressInfo';
import Contact from './contact';
import styles from './style';

class OrderDetail extends PureComponent {
  static navigationOptions = {
    title: '订单详情'
  };

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
      <View style={styles.page}>
        <View style={styles.whiteBg}>
          <StatusBar date='14-29' time='14:20' status='前取件' money='8.5' />
          <Tag />
        </View>
        <View style={styles.map} />
        <View style={styles.whiteBg}>
          <AddressInfo quInfo={quInfo} songInfo={songInfo} />
          <Contact />
        </View>
      </View>
    );
  }
}

export default OrderDetail;
