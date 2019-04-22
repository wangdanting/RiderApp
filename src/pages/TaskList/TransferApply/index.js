import React, { PureComponent } from 'react';
import { View } from 'react-native';
import OrderItem from './OrderItem';
import styles from './style';

class TransferApply extends PureComponent {
  abc = () => {};

  render() {
    return (
      <View style={styles.container}>
        <OrderItem />
      </View>
    );
  }
}

export default TransferApply;
