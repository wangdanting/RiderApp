import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import styles from './style';
import DateRangePicker from '@/components/DateRangePicker';
import OrderCell from './OrderCell';

const searchIcon = require('./images/top_search.png');
const triangleIcon = require('./images/day_triangle.png');

class HistoryOrder extends PureComponent {
  static navigationOptions = {
    title: '历史订单',
    headerRight: (
      <TouchableOpacity>
        <Flex style={{ height: '100%', width: 30 }}>
          <Image source={searchIcon} style={{ width: 15 }} resizeMode='contain' />
        </Flex>
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Flex style={styles.top} justify='between'>
          <TouchableOpacity>
            <Flex align='end'>
              <Text style={styles.placeholder}>选择日期</Text>
              <Image source={triangleIcon} style={styles.triangle} />
            </Flex>
          </TouchableOpacity>
          <Flex>
            <Text style={styles.money}>共计：</Text>
            <Text style={styles.money}>¥ 345.4</Text>
          </Flex>
        </Flex>
        {/* <View style={styles.timePanel}>
          <TouchableOpacity>
            <Text style={styles.item}>今天</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.item}>近7天</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.item}>近30天</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.item}>自定义</Text>
          </TouchableOpacity>
        </View> */}
        <DateRangePicker />

        <OrderCell />
      </View>
    );
  }
}

export default HistoryOrder;
