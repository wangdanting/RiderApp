import React, { PureComponent } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StatusBar from '@/components/StatusBar';
import Tag from '@/components/Tag';

class OrderItem extends PureComponent {
  abc = () => {};

  render() {
    return (
      <View style={styles.container}>
        <StatusBar date='14-29' time='14:20' status='前取件' money='8.5' />
        <Tag />
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
