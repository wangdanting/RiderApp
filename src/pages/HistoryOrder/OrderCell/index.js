import React from 'react';
import { View, Text } from 'react-native';
import { Flex, WingBlank } from '@ant-design/react-native';
import Tag from '@/components/Tag';
import PropTypes from 'prop-types';
import OneClick from '@/components/OneClick';
import AddressInfo from '@/components/AddressInfo';
import Separate from '@/components/Separate';

import styles from './style';

const { SeparateItem } = Separate;

const OrderCell = ({ item }) => {
  const quInfo = {
    title: item.fromBusinessName,
    subtitle: `${item.fromDistrictName} ${item.fromStreet} ${item.fromHouse}`
  };

  const songInfo = {
    title: `${item.destDistrictName} ${item.destStreet} ${item.destHouse}`,
    name: item.destName
  };

  return (
    <View style={styles.container}>
      <WingBlank>
        <Flex justify='between'>
          <Flex>
            <Text style={styles.order}>订单</Text>
            <Text style={styles.orderId}>{item.expressOrderId}</Text>
          </Flex>
          <Text style={styles.time}>{item.finishTimeFormat}</Text>
        </Flex>
        <Tag
          orderWay={item.orderWay}
          orderType={item.orderType}
          orderLabel={item.orderLabel}
          shopType={item.shopType}
        />
        {item.orderWay === 'applet-fast' ? <OneClick id={item.thirdOrderViewId} /> : null}
        <AddressInfo quInfo={quInfo} songInfo={songInfo} />
      </WingBlank>
      <Separate>
        <SeparateItem title={`用时${item.distributionTimeFormat}分钟`} />
        {item.orderWay === 'applet-proxy' ? null : (
          <SeparateItem title={`距离${item.deliveryDistancekm}km`} />
        )}
        <SeparateItem title={`¥ ${item.courierSettleAmount}`} color='red' />
      </Separate>
    </View>
  );
};

OrderCell.propTypes = {
  item: PropTypes.objectOf(PropTypes.any)
};

OrderCell.defaultProps = {
  item: {}
};

export default OrderCell;
