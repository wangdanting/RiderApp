import React, { PureComponent } from 'react';
import { FlatList, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import EmptySearch from '@/components/EmptySearch';
import styles from './style';

const tip = {
  success: '- 我是有底线的 -',
  processing: '玩命加载中 >.<'
};

class FlatListCom extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object), // 列表数据
    dataTotal: PropTypes.number, // 列表总数
    keyExtractor: PropTypes.func.isRequired, // 不重复的 key
    queryData: PropTypes.objectOf(PropTypes.any), // 查询条件
    handleSearch: PropTypes.func, // 查询函数
    refreshing: PropTypes.bool, // 下拉loading
    renderItem: PropTypes.func.isRequired // 列表dom
  };

  static defaultProps = {
    data: [],
    dataTotal: 0,
    queryData: {},
    handleSearch: () => {},
    refreshing: false
  };

  onEndReached = () => {
    const { queryData: prev, handleSearch, dataTotal, data } = this.props;
    if (data.length >= dataTotal) {
      return;
    }
    const queryData = Object.assign({}, prev, { page: prev.page + 1 });
    handleSearch(queryData);
  };

  onRefresh = () => {
    const { queryData: prev, handleSearch } = this.props;
    const queryData = Object.assign({}, prev, { page: 0 });
    handleSearch(queryData);
  };

  render() {
    const { refreshing, data, keyExtractor, renderItem, dataTotal } = this.props;
    const ListFooterComponent = (
      <Flex style={styles.listFooter} justify='center' align='center'>
        <Text style={styles.listFooterTxt}>
          {data.length < dataTotal ? tip.processing : tip.success}
        </Text>
      </Flex>
    );
    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={<EmptySearch style={styles.emptyImg} />}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.1}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
        ListFooterComponent={ListFooterComponent}
      />
    );
  }
}

export default FlatListCom;
