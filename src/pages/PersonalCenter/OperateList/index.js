import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Flex } from '@ant-design/react-native';
import { withNavigation } from 'react-navigation';
import CommonStyles from '@/common/styles/commonStyles';
import arrIcon from '../images/arr_right.png';
import styles from './style';

class OperateList extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }) // 导航
  };

  static defaultProps = {
    navigation: {
      navigate: () => {}
    }
  };

  /**
   * 跳转历史订单
   */
  goHistoryOrder = () => {
    const { navigation } = this.props;
    navigation.navigate('HistoryOrder');
  };

  /**
   * 跳转我的战绩
   */
  goRecord = () => {
    const { navigation } = this.props;
    navigation.navigate('Record');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goHistoryOrder}>
          <Flex style={CommonStyles.borderBottom} justify='between'>
            <Text style={styles.label}>历史订单</Text>
            <Image source={arrIcon} style={styles.icon} />
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goRecord}>
          <Flex justify='between'>
            <Text style={styles.label}>我的战绩</Text>
            <Image source={arrIcon} style={styles.icon} />
          </Flex>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(OperateList);
