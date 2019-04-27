import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import DashedDivider from '../DashedDivider';
import styles from './style';

const daigouIcon = require('./images/ic_daigou.png');
const moneyIcon = require('./images/ic-money-24.png');

const Daigou = ({ orderRemark, estimateFee }) => {
  return orderRemark ? (
    <Fragment>
      <DashedDivider />
      <View style={styles.container}>
        <Flex align='start'>
          <Image source={daigouIcon} style={styles.daigouIcon} />
          <Text style={styles.detailTxt}>{orderRemark}</Text>
        </Flex>
        {estimateFee ? (
          <Flex style={styles.estimate}>
            <Image source={moneyIcon} style={styles.moneyIcon} />
            <Text style={styles.feeTitle}>预估费</Text>
            <Text style={styles.fee}>{`${estimateFee}元`}</Text>
          </Flex>
        ) : null}
      </View>
    </Fragment>
  ) : null;
};

Daigou.propTypes = {
  orderRemark: PropTypes.string,
  estimateFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Daigou.defaultProps = {
  orderRemark: '',
  estimateFee: 0
};

export default Daigou;
