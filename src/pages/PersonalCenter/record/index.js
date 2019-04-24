import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Record = ({ data }) => (
  <View style={styles.container}>
    <Flex justify='between'>
      <Text style={styles.title}>今日战绩</Text>
      <View style={styles.divider} />
    </Flex>
    <Flex justify='between'>
      <View>
        <Text style={styles.label}>完成订单</Text>
        <Text style={[styles.value, styles.orange]}>{data.orderCount}</Text>
      </View>
      <View>
        <Text style={styles.label}>服务里程</Text>
        <Text style={[styles.value, styles.grey]}>{data.totalDistance}</Text>
      </View>
      <View>
        <Text style={styles.label}>完成金额</Text>
        <Text>
          <Text style={[styles.value, styles.red]}>¥</Text>
          <Text style={[styles.value, styles.red]}>{data.courierSettleAmount}</Text>
        </Text>
      </View>
    </Flex>
  </View>
);

Record.propTypes = {
  data: PropTypes.shape({
    orderCount: PropTypes.number,
    totalDistance: PropTypes.number,
    courierSettleAmount: PropTypes.number
  })
};

Record.defaultProps = {
  data: {
    orderCount: 0,
    totalDistance: 0,
    courierSettleAmount: 0
  }
};

export default Record;
