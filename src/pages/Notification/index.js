import React, { PureComponent } from 'react';
import { View } from 'react-native';
import OrderItem from './OrderItem';
import styles from './style';

class Notification extends PureComponent {
  static navigationOptions = {
    title: '消息通知'
  };

  render() {
    return (
      <View style={styles.container}>
        <OrderItem />
      </View>
    );
  }
}
export default Notification;
