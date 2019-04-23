import React, { PureComponent } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { Flex } from '@ant-design/react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';
import styles from './style';

const icon = require('./images/date_gray.png');

class DateRangePicker extends PureComponent {
  state = {
    activeType: 'startDate',
    isVisible: false,
    startDate: '',
    endDate: ''
  };

  handleOk = date => {
    const { activeType } = this.state;
    this.setState({
      [activeType]: dayjs(date).format('YYYY年MM月DD日'),
      isVisible: false
    });
  };

  handleCancel = () => {
    this.setState({
      isVisible: false
    });
  };

  showPicker = type => {
    this.setState({
      activeType: type,
      isVisible: true
    });
  };

  render() {
    const { isVisible, startDate, endDate } = this.state;
    return (
      <Flex style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={() => this.showPicker('startDate')}>
          <Flex justify='center'>
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.txt, startDate ? '' : styles.placehodler]}>
              {startDate || '选择开始日期'}
            </Text>
          </Flex>
        </TouchableOpacity>
        <Text style={styles.txt}>至</Text>
        <TouchableOpacity style={styles.item} onPress={() => this.showPicker('endDate')}>
          <Flex justify='center'>
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.txt, endDate ? '' : styles.placehodler]}>
              {endDate || '选择结束日期'}
            </Text>
          </Flex>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isVisible}
          onConfirm={this.handleOk}
          onCancel={this.handleCancel}
          cancelTextIOS='取消'
          confirmTextIOS='确定'
          titleIOS='选择日期'
        />
      </Flex>
    );
  }
}

export default DateRangePicker;
