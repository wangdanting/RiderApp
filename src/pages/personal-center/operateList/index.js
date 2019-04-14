import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import arrIcon from '../images/arr_right.png';
import styles from './style';
import CommonStyles from '@/common/styles/commonStyles';

class OperateList extends PureComponent {
  abc = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Flex style={CommonStyles.borderBottom} justify='between'>
          <Text style={styles.label}>历史订单</Text>
          <Image source={arrIcon} style={styles.icon} />
        </Flex>
        <Flex justify='between'>
          <Text style={styles.label}>我的战绩</Text>
          <Image source={arrIcon} style={styles.icon} />
        </Flex>
      </View>
    );
  }
}

export default OperateList;
