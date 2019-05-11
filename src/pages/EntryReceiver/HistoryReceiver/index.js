import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import commonStyles from '@/common/styles/commonStyles';
import { formatMobile } from '@/utils';
import styles from './style';

const closeIcon = require('@/common/images/ic_close_30.png');

class HistoryReceiverItem extends PureComponent {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.any),
    handleClick: PropTypes.func
  };

  static defaultProps = {
    item: [],
    handleClick: () => {}
  };

  onPress = () => {
    const { item, handleClick } = this.props;
    handleClick(item);
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={[styles.item, commonStyles.borderBottom]} onPress={this.onPress}>
        <Flex>
          <Text style={styles.mobile}>{formatMobile(item.destMobile)}</Text>
          <Text style={styles.name}>{item.destName}</Text>
        </Flex>
        <Text style={styles.addr}>{`${item.cityName}${item.districtName}${item.street}`}</Text>
      </TouchableOpacity>
    );
  }
}

const HistoryReceiver = ({ data = [], handleClick, handleClose }) => {
  return data.length ? (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {data.map(item => (
          <HistoryReceiverItem item={item} handleClick={handleClick} key={`${item.userId}`} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.close} onPress={handleClose}>
        <Image source={closeIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  ) : null;
};

HistoryReceiver.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object), // 数据
  handleClick: PropTypes.func, // 点击列表项回调函数
  handleClose: PropTypes.func // 点击关闭
};

HistoryReceiver.defaultProps = {
  data: [],
  handleClick: () => {},
  handleClose: () => {}
};

export default HistoryReceiver;
