import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Tag = ({ orderWay, orderType, orderLabel, shopType }) => (
  <View style={styles.container}>
    <Flex>
      {orderType === 'predict' ? (
        <View style={[styles.tag, styles.pink]}>
          <Text style={[styles.tagTxt, styles.pink]}>预约</Text>
        </View>
      ) : null}
      {orderWay === 'applet-proxy' ? (
        <View style={[styles.tag, styles.yellow]}>
          <Text style={[styles.tagTxt, styles.yellow]}>代购</Text>
        </View>
      ) : null}
      {orderWay === 'applet-proxy' && shopType === 'designation' ? (
        <View style={[styles.tag, styles.purple]}>
          <Text style={[styles.tagTxt, styles.purple]}>指定商家</Text>
        </View>
      ) : null}
      {orderLabel ? (
        <View style={[styles.tag, styles.blue]}>
          <Text style={[styles.tagTxt, styles.blue]}>94懒 #123</Text>
        </View>
      ) : null}
    </Flex>
  </View>
);

Tag.propTypes = {
  orderWay: PropTypes.string, // 下单方式
  orderType: PropTypes.string, // 订单类型
  orderLabel: PropTypes.string, // 订单label
  shopType: PropTypes.string // 商店类型
};

Tag.defaultProps = {
  orderWay: '',
  orderType: '',
  orderLabel: '',
  shopType: ''
};

export default Tag;
