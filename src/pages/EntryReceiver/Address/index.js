import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput from '@/components/SearchInput';
import commonStyles from '../../../common/styles/commonStyles';
import styles from './style';

class Address extends PureComponent {
  static navigationOptions = {
    title: '选择收货人地区',
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
        <View style={styles.input}>
          <SearchInput placeholder='请输入收货地址：小区/大厦/学校' />
        </View>
        <ScrollView>
          <View style={styles.content}>
            <TouchableOpacity style={[styles.item, commonStyles.borderBottom]}>
              <Text style={styles.title}>英利大融城</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                解放碑大坪整洁19好流阴历国际广场3好喽407诗19好流阴历国际广场3好喽407诗
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item, commonStyles.borderBottom]}>
              <Text style={styles.title}>英利大融城</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                解放碑大坪整洁19好流阴历国际广场3好喽407诗19好流阴历国际广场3好喽407诗
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Address;
