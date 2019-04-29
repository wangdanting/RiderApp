import React, { PureComponent } from 'react';
import FlatList from '@/components/FlatList';
import PropTypes from 'prop-types';
import OrderCell from '../OrderCell';

const keyExtractor = item => String(item.expressOrderId);

const renderItem = ({ item }) => <OrderCell item={item} />;

class OrderList extends PureComponent {
  render() {
    const { data, queryData, handleSearch, refreshing, dataTotal } = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        queryData={queryData}
        handleSearch={handleSearch}
        refreshing={refreshing}
        dataTotal={dataTotal}
      />
    );
  }
}

OrderList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  dataTotal: PropTypes.number, // 列表总数
  queryData: PropTypes.objectOf(PropTypes.any), // 查询条件
  handleSearch: PropTypes.func, // 查询函数
  refreshing: PropTypes.bool // 下拉loading
};

OrderList.defaultProps = {
  data: [],
  dataTotal: 0,
  queryData: {},
  handleSearch: () => {},
  refreshing: false
};

renderItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any)
};

renderItem.defaultProps = {
  item: {}
};

export default OrderList;
