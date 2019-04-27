import React from 'react';
import { Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Img = require('./images/no_data.png');

const EmptySearch = ({ style }) => (
  <Flex style={Object.assign({}, styles.container, style)} direction='column' justify='center'>
    <Image source={Img} style={styles.img} resizeMode='contain' />
    <Text style={styles.title}>没有数据哦～</Text>
  </Flex>
);

EmptySearch.propTypes = {
  style: PropTypes.objectOf(PropTypes.any)
};

EmptySearch.defaultProps = {
  style: {}
};

export default EmptySearch;
