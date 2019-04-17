import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Button = ({ type, onPress, icon, disabled }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Flex style={[styles.btn, styles[type], styles[`${type}${disabled}`]]} justify='center'>
        {icon > -1 ? <Image source={icon} style={styles.icon} /> : null}
        <Text style={[styles.txt, styles[`${type}Txt`], styles[`${type}${disabled}Txt`]]}>
          转单
        </Text>
      </Flex>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'plain']), // Button类型
  onPress: PropTypes.func, // 点击后的回调函数
  icon: PropTypes.number, // icon路径
  disabled: PropTypes.bool // 是否禁用
};

Button.defaultProps = {
  type: 'plain',
  onPress: () => {},
  icon: -1,
  disabled: true
};

export default Button;
