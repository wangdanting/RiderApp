import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import styles from './style';

const img = require('./images/contact_shop.png');

const StatusBar = ({ date, time, status, money, rightBtnText, onRightBtn }) => (
  <View style={styles.container}>
    <Flex justify='between'>
      <Flex>
        {date ? <Text style={styles.date}>{date}</Text> : null}
        {time ? <Text style={styles.time}>{time}</Text> : null}
        {status ? <Text style={styles.status}>{status}</Text> : null}
      </Flex>
      {money ? <Text style={styles.money}>{`¥ ${money}`}</Text> : null}
      {rightBtnText ? (
        <TouchableOpacity onPress={onRightBtn}>
          <Flex justify='center' align='center' style={styles.btn}>
            <Image source={img} style={styles.img} />
            <Text style={styles.btnText}>{rightBtnText}</Text>
          </Flex>
        </TouchableOpacity>
      ) : null}
    </Flex>
  </View>
);

StatusBar.propTypes = {
  date: PropTypes.string, // 日期
  time: PropTypes.string, // 时间
  status: PropTypes.string, // 状态
  money: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 价格
  rightBtnText: PropTypes.string, // 右边的按钮内容
  onRightBtn: PropTypes.func // 点击右边按钮的回调
};

StatusBar.defaultProps = {
  date: '',
  time: '',
  status: '',
  money: '',
  rightBtnText: '',
  onRightBtn: () => {}
};

export default StatusBar;
