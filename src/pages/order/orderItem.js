import React, { PureComponent } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StatusBar from '@/components/StatusBar';
import Tag from '@/components/Tag';
import AddressInfo from '@/components/AddressInfo';
import Button from '@/components/Button';

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
        <StatusBar date='14-29' time='14:20' status='前取件' money='8.5' />
        <Tag />
        <AddressInfo quInfo={quInfo} songInfo={songInfo} />
        <Button />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    marginTop: '20rem',
    paddingHorizontal: '30rem',
    backgroundColor: '#fff'
  }
});

export default OrderItem;
