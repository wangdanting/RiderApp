import React from 'react';
import { View } from 'react-native';
import styles from './style';

const DashedDivider = () => (
  <View style={styles.wrapperStyle}>
    <View style={styles.lineStyle} />
    <View style={styles.lineMask} />
  </View>
);

export default DashedDivider;
