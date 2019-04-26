import React from 'react';
import { Flex } from '@ant-design/react-native';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const PageLoading = ({ loading }) => {
  return loading ? (
    <Flex style={styles.container} justify='center' align='center'>
      <ActivityIndicator size='large' color='#121212' />
    </Flex>
  ) : null;
};

PageLoading.propTypes = {
  loading: PropTypes.bool // 是否显示
};

PageLoading.defaultProps = {
  loading: false
};

export default PageLoading;
