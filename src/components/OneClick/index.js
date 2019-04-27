import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import styles from './style';

const OneClick = ({ id }) => (
  <Flex style={styles.yijian} justify='between'>
    <View style={styles.orderId}>
      <Text style={styles.orderIdTxt}>{id}</Text>
    </View>
    <Text style={styles.orderIdLabel}>一键下单单号</Text>
  </Flex>
);

OneClick.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OneClick.defaultProps = {
  id: ''
};

export default OneClick;
