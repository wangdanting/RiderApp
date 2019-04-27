import React from 'react';
import { View, Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import Divider from '../Divider';
import styles from './style';
import theme from '@/common/styles/variables';

const dotOrange = require('./images/dot_color.png');
const dotRed = require('./images/dot_red.png');
const dot = require('./images/dot.png');

const { $primaryColor } = theme;

const Steps = ({
  orderCreateTime,
  acceptTime,
  acceptOnTime,
  fetchTime,
  finishOnTime,
  finishTime
}) => {
  // eslint-disable-next-line no-nested-ternary
  const fetchDot = fetchTime ? (acceptOnTime ? dotOrange : dotRed) : dot;
  // eslint-disable-next-line no-nested-ternary
  const finishDot = finishTime ? (finishOnTime ? dotOrange : dotRed) : dot;

  return (
    <Flex justify='between' style={styles.container}>
      <Flex direction='column'>
        <Text style={styles.title}>下单</Text>
        <Image source={orderCreateTime ? dotOrange : dot} style={styles.dot} />
        <Text style={styles.subtitle}>{orderCreateTime}</Text>
      </Flex>
      <View style={styles.divider}>
        <Divider color={acceptTime ? $primaryColor : ''} />
      </View>
      <Flex direction='column'>
        <Text style={styles.title}>接单</Text>
        <Image source={acceptTime ? dotOrange : dot} style={styles.dot} />
        <Text style={styles.subtitle}>{acceptTime}</Text>
      </Flex>
      <View style={styles.divider}>
        <Divider color={fetchTime ? $primaryColor : ''} />
      </View>
      <Flex direction='column'>
        <Text style={styles.title}>{acceptOnTime ? '取件' : '超时取件'}</Text>
        <Image source={fetchDot} style={styles.dot} />
        <Text style={styles.subtitle}>{fetchTime}</Text>
      </Flex>
      <View style={styles.divider}>
        <Divider color={finishTime ? $primaryColor : ''} />
      </View>
      <Flex direction='column'>
        <Text style={styles.title}>{finishOnTime ? '送达' : '超时送达'}</Text>
        <Image source={finishDot} style={styles.dot} />
        <Text style={styles.subtitle}>{finishTime}</Text>
      </Flex>
    </Flex>
  );
};

Steps.propTypes = {
  orderCreateTime: PropTypes.string, // 下单时间
  acceptTime: PropTypes.string, // 接单时间
  acceptOnTime: PropTypes.bool, // 是否按时取件
  fetchTime: PropTypes.string, // 取件时间
  finishOnTime: PropTypes.bool, // 是否按时送达
  finishTime: PropTypes.string // 送达时间
};

Steps.defaultProps = {
  orderCreateTime: '',
  acceptTime: '',
  acceptOnTime: true,
  fetchTime: '',
  finishOnTime: true,
  finishTime: ''
};

export default Steps;
