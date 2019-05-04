import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import StatusBar from '@/components/StatusBar';
import Tag from '@/components/Tag';
import AddressInfo from '@/components/AddressInfo';
import PropTypes from 'prop-types';
import OneClick from '@/components/OneClick';
import Daigou from '@/components/Daigou';
import Button from '@/components/Button';
import styles from './style';

const inputIcon = require('../../images/ic_input.png');
const closeIcon = require('../../images/cancle.png');

class OrderItem extends PureComponent {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.any),
    status: PropTypes.oneOf(['wait_accept', 'wait_write', 'wait_fetch', 'sending']).isRequired // 订单状态
  };

  static defaultProps = {
    item: {}
  };

  render() {
    const { item, status } = this.props;

    const quInfo = !(item.orderWay === 'applet-proxy' && item.shopType === 'nearby')
      ? {
          title: item.fromBusinessName,
          subtitle: `${item.fromDistrictName} ${item.fromStreet} ${item.fromHouse}`
        }
      : {};
    const songInfo =
      item.orderWay !== 'applet-fast'
        ? {
            title: `${item.destDistrictName} ${item.destStreet} ${item.destHouse}`,
            name: item.destName
          }
        : {};

    return (
      <View style={styles.container}>
        <StatusBar date='14-29' time='14:20' status='前取件' money='8.5' />
        <Tag
          orderWay={item.orderWay}
          orderType={item.orderType}
          orderLabel={item.orderLabel}
          shopType={item.shopType}
        />
        {item.orderWay === 'applet-fast' ? <OneClick id={item.thirdOrderViewId} /> : null}
        <AddressInfo quInfo={quInfo} songInfo={songInfo} />
        <Daigou orderRemark={item.orderRemark} estimateFee={item.estimateFee} />
        <Flex style={styles.btnGroup}>
          {status !== 'sending' && !item.orderTurnState ? (
            <Button title='转单' type='plain' style={styles.turnBtn} />
          ) : null}
          {status === 'wait_accept' && !item.orderTurnState ? (
            <Button title='接单' type='primary' style={styles.receiveBtn} />
          ) : null}
          {status === 'wait_fetch' && !item.orderTurnState ? (
            <Button title='确认取件' type='primary' style={styles.receiveBtn} />
          ) : null}
          {status === 'sending' ? (
            <Button title='确认送达' type='primary' style={styles.receiveBtn} />
          ) : null}
          {status === 'wait_write' && !item.orderTurnState ? (
            <Button
              title='录入收货人信息'
              type='primary'
              style={styles.receiveBtn}
              icon={inputIcon}
            />
          ) : null}
          {item.orderTurnState ? (
            <Button title='撤销转单' style={styles.returnBtn} icon={closeIcon} />
          ) : null}
        </Flex>
        <Text style={styles.orderId}>{`订单号 ${item.expressOrderId}`}</Text>
      </View>
    );
  }
}
export default OrderItem;
