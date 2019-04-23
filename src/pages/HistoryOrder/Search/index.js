import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EmptySearch from '@/components/EmptySearch';
import styles from './style';

class Search extends PureComponent {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity>
        <Text>搜索</Text>
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <View style={styles.page}>
        {/* <Text style={styles.placeholder}>请输入订单号、商家名称进行查询</Text> */}
        <EmptySearch />
      </View>
    );
  }
}

export default Search;
