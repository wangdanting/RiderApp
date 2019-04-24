import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import Divider from '../../components/Divider';
import styles from './style';
import Tabs from './Tabs';

class Record extends PureComponent {
  static navigationOptions = {
    title: '我的战绩',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

  render() {
    return (
      <View style={styles.page}>
        <Tabs />
        <View style={styles.container}>
          <Flex style={styles.title}>
            <View style={styles.tag} />
            <Text style={styles.titleTxt}>预计收入</Text>
          </Flex>
          <Text style={styles.label}>完成金额(元)</Text>
          <Text style={styles.money}>¥ 783749.0</Text>
          <Flex>
            <View style={styles.item}>
              <Text style={styles.label}>完成订单(单)</Text>
              <Text style={styles.order}>400</Text>
            </View>
            <Divider type='vertical' />
            <View style={styles.item}>
              <Text style={styles.label}>服务里程(km)</Text>
              <Text style={styles.km}>400</Text>
            </View>
          </Flex>
        </View>
        <View style={styles.container}>
          <Flex style={styles.title}>
            <View style={styles.tag} />
            <Text style={styles.titleTxt}>订单分析</Text>
          </Flex>
          <Flex justify='between' style={styles.items}>
            <Text style={styles.left}>准时配送</Text>
            <Text style={styles.right}>556 单</Text>
          </Flex>
          <Flex justify='between' style={styles.items}>
            <Text style={styles.left}>超时配送</Text>
            <Text style={styles.right}>556 单</Text>
          </Flex>
          <Flex justify='between' style={styles.items}>
            <Text style={styles.left}>异常配送</Text>
            <Text style={styles.right}>556 单</Text>
          </Flex>
        </View>
      </View>
    );
  }
}

export default Record;
