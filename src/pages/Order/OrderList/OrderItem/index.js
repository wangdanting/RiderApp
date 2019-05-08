import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { Flex } from '@ant-design/react-native';
import StatusBar from '@/components/StatusBar';
import Tag from '@/components/Tag';
import AddressInfo from '@/components/AddressInfo';
import PropTypes from 'prop-types';
import OneClick from '@/components/OneClick';
import Daigou from '@/components/Daigou';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { request } from '@/utils';
import styles from './style';

const inputIcon = require('../../images/ic_input.png');
const closeIcon = require('../../images/cancle.png');

class OrderItem extends PureComponent {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.any),
    status: PropTypes.oneOf(['wait_accept', 'wait_write', 'wait_fetch', 'sending']).isRequired, // 订单状态
    lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleSearch: PropTypes.func,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }) // 导航
  };

  static defaultProps = {
    item: {},
    lng: '',
    lat: '',
    handleSearch: () => {},
    navigation: {
      navigate: () => {}
    }
  };

  state = {
    isShowReceiveModal: false, // 是否显示确认接单modal
    isShowCancelModal: false // 是否显示确认撤销转单modal
  };

  /**
   * 刷新订单列表
   */
  handleSearch = () => {
    const { handleSearch, status } = this.props;
    const queryData = {
      status,
      page: 0,
      size: 10
    };
    handleSearch(queryData);
  };

  /**
   * 接单modal
   */
  receiveOrder = () => {
    this.setState({
      isShowReceiveModal: true
    });
  };

  /**
   * 确认接单
   */
  receiveOrderOk = () => {
    const { lng, lat, item } = this.props;
    this.receiveOrderCancel();
    request(`/express_orders/receive/${item.expressOrderId}`, {
      data: {
        lng,
        lat
      },
      method: 'post'
    }).then(({ result }) => {
      if (result) {
        this.handleSearch();
      }
    });
  };

  /**
   * 隐藏接单Modal
   */
  receiveOrderCancel = () => {
    this.setState({
      isShowReceiveModal: false
    });
  };

  /**
   * 转单
   */
  goTransferOrder = () => {
    const { navigation, item } = this.props;
    navigation.navigate('TransferOrder', { orderId: item.expressOrderId });
  };

  /**
   * 关闭确认转单
   */
  setCancelOrderModal = () => {
    this.setState(prev => ({
      isShowCancelModal: !prev.isShowCancelModal
    }));
  };

  /**
   * 撤销转单
   */
  cancelOrder = () => {
    const { item } = this.props;
    this.setCancelOrderModal();
    request('/orders/switch/revocation', {
      method: 'post',
      params: {
        orderId: item.expressOrderId
      }
    }).then(({ result }) => {
      if (result) {
        this.handleSearch();
      }
    });
  };

  /**
   * 跳转订单详情
   */
  gotoDetail = () => {
    const { navigation, item, status } = this.props;
    navigation.navigate('OrderDetail', { data: item, status });
  };

  /**
   * 跳转录入收货人信息
   */
  goEntryReceiver = () => {
    const { navigation } = this.props;
    navigation.navigate('EntryReceiver');
  };

  render() {
    const { item, status } = this.props;
    const { isShowReceiveModal, isShowCancelModal } = this.state;

    const quInfo = !(item.orderWay === 'applet-proxy' && item.shopType === 'nearby')
      ? {
          title: item.fromBusinessName,
          subtitle: `${item.fromDistrictName} ${item.fromStreet} ${item.fromHouse}`
        }
      : {};
    const songInfo =
      item.orderWay !== 'applet-fast'
        ? {
            title: `${item.destDistrictName} ${item.destStreet} ${item.destHouse}`,
            name: item.destName
          }
        : {};

    return (
      <TouchableOpacity style={styles.container} onPress={this.gotoDetail}>
        <StatusBar date='14-29' time='14:20' status='前取件' money='8.5' />
        <Tag
          orderWay={item.orderWay}
          orderType={item.orderType}
          orderLabel={item.orderLabel}
          shopType={item.shopType}
        />
        {item.orderWay === 'applet-fast' ? <OneClick id={item.thirdOrderViewId} /> : null}
        <AddressInfo quInfo={quInfo} songInfo={songInfo} />
        <Daigou orderRemark={item.orderRemark} estimateFee={item.estimateFee} />
        <Flex style={styles.btnGroup}>
          {status !== 'sending' && !item.orderTurnState ? (
            <Button
              title='转单'
              type='plain'
              style={styles.turnBtn}
              onPress={this.goTransferOrder}
            />
          ) : null}
          {status === 'wait_accept' && !item.orderTurnState ? (
            <Button
              title='接单'
              type='primary'
              style={styles.receiveBtn}
              onPress={this.receiveOrder}
            />
          ) : null}
          {status === 'wait_fetch' && !item.orderTurnState ? (
            <Button title='确认取件' type='primary' style={styles.receiveBtn} />
          ) : null}
          {status === 'sending' ? (
            <Button title='确认送达' type='primary' style={styles.receiveBtn} />
          ) : null}
          {status === 'wait_write' && !item.orderTurnState ? (
            <Button
              title='录入收货人信息'
              type='primary'
              style={styles.receiveBtn}
              icon={inputIcon}
              onPress={this.goEntryReceiver}
            />
          ) : null}
          {item.orderTurnState ? (
            <Button
              title='撤销转单'
              style={styles.returnBtn}
              icon={closeIcon}
              onPress={this.setCancelOrderModal}
            />
          ) : null}
        </Flex>
        <Text style={styles.orderId}>{`订单号 ${item.expressOrderId}`}</Text>
        <Modal
          leftText='取消'
          rightText='确认'
          highLightPosition='right'
          title='接单'
          isVisible={isShowReceiveModal}
          onRight={this.receiveOrderOk}
          onLeft={this.receiveOrderCancel}
        >
          <Text style={styles.modal}>是否确认接该订单？</Text>
        </Modal>
        <Modal
          leftText='确定'
          rightText='取消'
          highLightPosition='left'
          title='撤销转单'
          isVisible={isShowCancelModal}
          onRight={this.setCancelOrderModal}
          onLeft={this.cancelOrder}
        >
          <Text style={styles.modal}>您确定要撤销该转单？</Text>
        </Modal>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    lng: state.global.lng,
    lat: state.global.lat
  };
};

export default connect(mapStateToProps)(withNavigation(OrderItem));
