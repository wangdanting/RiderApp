import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Tag from '@/components/Tag';
import StatusBar from '@/components/StatusBar';
import styles from './style';

class OrderDetail extends PureComponent {
  static navigationOptions = {
    title: '订单详情'
  };

  render() {
    return (
      <View style={styles.page}>
        <StatusBar date='14-29' time='14:20' status='前取件' money='8.5' />
        <Tag />
      </View>
    );
  }
}

export default OrderDetail;
