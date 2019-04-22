import React, { PureComponent } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Flex } from '@ant-design/react-native';
import commonStyles from '@/common/styles/commonStyles';
import Button from '@/components/Button';
import HistoryReceiver from './history-receiver';
import styles from './style';

const shouIcon = require('./images/ic_shou.png');

class entryReceiver extends PureComponent {
  static navigationOptions = {
    title: '录入收货人信息'
  };

  render() {
    return (
      <View style={styles.container}>
        <Flex style={styles.content} align='start'>
          <Image source={shouIcon} style={styles.icon} />
          <View style={styles.info}>
            <Flex style={[styles.item, commonStyles.borderBottom]}>
              <Text style={styles.label}>电话：</Text>
              <TextInput placeholder='收件人手机号码' style={styles.input} />
            </Flex>
            <Flex style={[styles.item, commonStyles.borderBottom]}>
              <Text style={styles.label}>姓名：</Text>
              <TextInput placeholder='收件人姓名(选填)' style={styles.input} />
            </Flex>
            <Flex style={[styles.item, commonStyles.borderBottom]}>
              <Text style={styles.label}>地区：</Text>
              <TextInput placeholder='点击选择' style={styles.input} />
              <View style={styles.arrow} />
            </Flex>
            <Flex style={styles.item}>
              <Text style={styles.label}>门牌号：</Text>
              <TextInput placeholder='例：16号楼427室' style={styles.input} />
            </Flex>
            <HistoryReceiver />
          </View>
        </Flex>
        <Button title='保存' type='primary' style={styles.btn} />
      </View>
    );
  }
}

export default entryReceiver;
