import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import styles from './style';

const DescriptionList = ({ children, title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.content}>{children}</View>
  </View>
);

const Description = ({ label, value }) => (
  <Flex style={styles.item}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </Flex>
);

DescriptionList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string // 标题
};

DescriptionList.defaultProps = {
  children: [],
  title: ''
};

Description.propTypes = {
  label: PropTypes.string, // 标签
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Description.defaultProps = {
  label: '',
  value: ''
};

DescriptionList.Description = Description;

export default DescriptionList;
