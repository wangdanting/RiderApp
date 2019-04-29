import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import SearchInput from '@/components/SearchInput';
import { request } from '@/utils';
import OrderList from '../OrderList';
import styles from './style';

class Search extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: (
        <SearchInput
          placeholder='请输入订单号、商家名称进行查询'
          text={params.orderIdOrShopName}
          onChangeText={params.onChangeText}
        />
      ),
      headerRight: (
        <TouchableOpacity onPress={() => params.handleSearch()}>
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
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    data: [], // 搜索结果
    dataTotal: 0, // 总的结果条数
    refreshing: false, // 下拉loading
    queryData: {
      start: dayjs()
        .subtract(3, 'months')
        .valueOf(),
      end: dayjs().valueOf(),
      orderIdOrShopName: '',
      page: 0,
      size: 10
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      handleSearch: this.handleSearch,
      onChangeText: this.onChangeText
    });
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
    request('/express_orders/v2019/courier_histoty', {
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

  /**
   * 修改搜索框文本
   */
  onChangeText = orderIdOrShopName => {
    const { navigation } = this.props;
    navigation.setParams({
      orderIdOrShopName
    });
    const { queryData: prev } = this.state;
    const queryData = Object.assign({}, prev, { orderIdOrShopName });
    this.setState({
      queryData
    });
  };

  render() {
    const { queryData, data, refreshing, dataTotal } = this.state;
    const { orderIdOrShopName } = queryData;
    return (
      <View style={styles.page}>
        {!orderIdOrShopName.length ? (
          <Text style={styles.placeholder}>请输入订单号、商家名称进行查询</Text>
        ) : null}
        {orderIdOrShopName.length ? (
          <OrderList
            data={data}
            handleSearch={this.handleSearch}
            queryData={queryData}
            refreshing={refreshing}
            dataTotal={dataTotal}
          />
        ) : null}
      </View>
    );
  }
}

export default Search;
