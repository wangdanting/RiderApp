import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FlatList from '@/components/FlatList';
import { request } from '@/utils';
import OrderItem from './OrderItem';

class OrderList extends PureComponent {
  static propTypes = {
    status: PropTypes.oneOf(['wait_accept', 'wait_write', 'wait_fetch', 'sending']).isRequired // 订单状态
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [], // 搜索结果
      dataTotal: 0, // 总的结果条数
      refreshing: false, // 下拉loading
      queryData: {
        status: props.status,
        page: 0,
        size: 10
      }
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  /**
   * 请求数据
   */
  // eslint-disable-next-line
  handleSearch = (queryData = this.state.queryData) => {
    const { data } = this.state;
    this.setState({
      queryData
    });
    request('/express_orders/courier', {
      params: queryData
    }).then(result => {
      const { results, totalCount } = result;
      this.setState({
        data: queryData.page === 0 ? results : [...data, ...results],
        dataTotal: totalCount,
        refreshing: false
      });
    });
  };

  keyExtractor = item => String(item.expressOrderId);

  renderItem = ({ item }) => <OrderItem item={item} />;

  render() {
    const { data, queryData, refreshing, dataTotal } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        queryData={queryData}
        handleSearch={this.handleSearch}
        refreshing={refreshing}
        dataTotal={dataTotal}
      />
    );
  }
}

export default OrderList;
