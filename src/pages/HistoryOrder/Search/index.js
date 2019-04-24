import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EmptySearch from '@/components/EmptySearch';
import SearchInput from '@/components/SearchInput';
import styles from './style';

class Search extends PureComponent {
  static navigationOptions = {
    headerTitle: <SearchInput style={{ width: '100%' }} />,
    headerRight: (
      <TouchableOpacity>
        <Text style={{ color: '#666' }}>搜索</Text>
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      paddingRight: 20
    },
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
        {/* <Text style={styles.placeholder}>请输入订单号、商家名称进行查询</Text> */}
        <EmptySearch />
      </View>
    );
  }
}

export default Search;
