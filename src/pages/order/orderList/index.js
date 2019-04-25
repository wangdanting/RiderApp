import React, { PureComponent } from 'react';
import { View } from 'react-native';
import OrderItem from './orderItem';

class OrderList extends PureComponent {
  abc = () => {};

  render() {
    return (
      <View>
        <OrderItem />
      </View>
    );
  }
}

export default OrderList;
