import React, { PureComponent } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/Button';
import commonStyles from '@/common/styles/commonStyles';
// import EmptySearch from '@/components/EmptySearch';
import Modal from '@/components/Modal';
import styles from './style';

const icon = require('./images/head_60.png');

class TransferOrder extends PureComponent {
  static navigationOptions = {
    title: '转单',
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
      <View style={styles.container}>
        <View style={styles.search}>
          <SearchInput />
        </View>
        <ScrollView style={styles.list}>
          <Flex style={styles.item}>
            <Image source={icon} style={styles.icon} />
            <Flex style={[styles.right, commonStyles.borderBottom]} justify='between'>
              <Flex direction='column' align='start' justify='center'>
                <Text style={styles.name}>王丹婷</Text>
                <Text style={styles.mobile}>18875082742</Text>
              </Flex>
              <Button type='plain' title='转给TA' style={styles.btn} />
            </Flex>
          </Flex>
        </ScrollView>
        {/* <EmptySearch /> */}
        <Modal
          leftText='确定'
          rightText='取消'
          highLightPosition='left'
          title='转单'
          isVisible={false}
        >
          <Flex justify='center'>
            <Text style={styles.modalTxt}>将这笔订单转给配送员</Text>
            <Text style={styles.modalActive}>王丹婷</Text>
            <Text style={styles.modalTxt}>?</Text>
          </Flex>
        </Modal>
      </View>
    );
  }
}

export default TransferOrder;
