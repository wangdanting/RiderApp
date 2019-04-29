import React, { PureComponent, Fragment } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import dayjs from 'dayjs';
import { request } from '@/utils';
import styles from './style';
import DateRangePicker from '@/components/DateRangePicker';
import OrderList from './OrderList';

const searchIcon = require('./images/top_search.png');
const triangleIcon = require('./images/day_triangle.png');

class HistoryOrder extends PureComponent {
  static navigationOptions = {
    title: '历史订单',
    headerRight: (
      <TouchableOpacity>
        <Flex style={{ height: '100%', width: 30 }}>
          <Image source={searchIcon} style={{ width: 15 }} resizeMode='contain' />
        </Flex>
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

  state = {
    isShowTimePanel: false, // 是否展示选择日期面板
    activeTime: '', // 激活的日期
    data: [], // 搜索结果
    dataTotal: 0, // 总的结果条数
    courierSettleTotalAmount: 0, // 共计
    queryData: {
      start: '',
      end: '',
      page: 0,
      size: 10
    },
    refreshing: false // 下拉loading
  };

  /**
   * 展示选择日期面板
   */
  showTimePanel = () => {
    this.setState({
      isShowTimePanel: true
    });
  };

  /**
   * 隐藏选择日期面板
   */
  hideTimePanel = () => {
    this.setState({
      isShowTimePanel: false
    });
  };

  /**
   * 选择日期
   */
  handleChange = time => {
    if (time !== 'custom') {
      const start = dayjs()
        .startOf(time)
        .valueOf();
      const end = dayjs().valueOf();

      const { queryData: prev } = this.state;
      const queryData = Object.assign({}, prev, { start, end });
      this.handleSearch(queryData);
    }
    this.hideTimePanel();
    this.setState({
      activeTime: time
    });
  };

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
      const {
        results,
        totalCount,
        totalReport: { courierSettleTotalAmount = 0 }
      } = result;
      this.setState({
        data: queryData.page === 0 ? results : [...data, ...results],
        dataTotal: totalCount,
        courierSettleTotalAmount,
        refreshing: false
      });
    });
  };

  /**
   * 区分选择的日期
   */
  getTime = () => {
    const { activeTime } = this.state;
    switch (activeTime) {
      case 'day':
        return '今天';
      case 'week':
        return '近7天';
      case 'month':
        return '近30天';
      case 'custom':
        return '自定义';
      default:
        return '选择日期';
    }
  };

  /**
   * 自定义日期
   */
  setCustomTime = ({ startDate, endDate }) => {
    const { queryData: prev } = this.state;
    const queryData = Object.assign({}, prev, { start: startDate, end: endDate });
    this.handleSearch(queryData);
  };

  render() {
    const {
      isShowTimePanel,
      activeTime,
      data,
      courierSettleTotalAmount,
      queryData,
      refreshing,
      dataTotal
    } = this.state;
    return (
      <View style={styles.page}>
        <Flex style={styles.top} justify='between'>
          <TouchableOpacity onPress={this.showTimePanel}>
            <Flex align='end'>
              <Text style={[styles.time, activeTime === '' ? styles.placeholder : '']}>
                {this.getTime()}
              </Text>
              <Image source={triangleIcon} style={styles.triangle} />
            </Flex>
          </TouchableOpacity>
          <Flex>
            <Text style={styles.money}>共计：</Text>
            <Text style={styles.money}>{`¥ ${courierSettleTotalAmount}`}</Text>
          </Flex>
        </Flex>
        {isShowTimePanel ? (
          <Fragment>
            <View style={styles.timePanel}>
              <TouchableOpacity onPress={() => this.handleChange('day')}>
                <Text style={[styles.item, activeTime === 'day' ? styles.active : '']}>今天</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleChange('week')}>
                <Text style={[styles.item, activeTime === 'week' ? styles.active : '']}>近7天</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleChange('month')}>
                <Text style={[styles.item, activeTime === 'month' ? styles.active : '']}>
                  近30天
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleChange('custom')}>
                <Text style={[styles.item, activeTime === 'custom' ? styles.active : '']}>
                  自定义
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.hideTimePanel} style={styles.layer} />
          </Fragment>
        ) : null}
        {activeTime === 'custom' ? <DateRangePicker handleChange={this.setCustomTime} /> : null}
        {Boolean(activeTime) && (
          <OrderList
            data={data}
            handleSearch={this.handleSearch}
            queryData={queryData}
            refreshing={refreshing}
            dataTotal={dataTotal}
          />
        )}
        {!activeTime && <Text style={styles.tip}>请选择需要查询的日期</Text>}
      </View>
    );
  }
}

export default HistoryOrder;
