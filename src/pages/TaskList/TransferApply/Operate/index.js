import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Flex } from '@ant-design/react-native';
import commonStyles from '../../../../common/styles/commonStyles';
import Divider from '../../../../components/Divider';
import styles from './style';

const Operate = () => (
  <Flex style={[styles.container, commonStyles.borderTop]}>
    <TouchableOpacity style={styles.item}>
      <Text style={styles.txt}>拒绝</Text>
    </TouchableOpacity>
    <Divider type='vertical' />
    <TouchableOpacity style={styles.item}>
      <Text style={[styles.txt, styles.active]}>接受</Text>
    </TouchableOpacity>
  </Flex>
);

export default Operate;
