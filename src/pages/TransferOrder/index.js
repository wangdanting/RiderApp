import React, { PureComponent } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Flex, Toast } from '@ant-design/react-native';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/Button';
import commonStyles from '@/common/styles/commonStyles';
import EmptySearch from '@/components/EmptySearch';
import Modal from '@/components/Modal';
import { request } from '@/utils';
import styles from './style';

const icon = require('./images/head_60.png');

let timer = null; // 定时器

class TransferOrder extends PureComponent {
  static navigationOptions = {
    title: '转单',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
      left: -30
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

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

  state = {
    data: [], // 可转单快递员列表
    isVisible: false, // 是否显示modal
    activeCourier: {}, // 被激活的快递员信息
    queryData: {
      orderId: 0, // 订单id
      text: '' // 搜索的关键字
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { queryData: prev } = this.state;
    const orderId = navigation.getParam('orderId');
    const queryData = Object.assign({}, prev, { orderId });
    this.getCourierList(queryData);
    this.setState({
      queryData
    });
  }

  /**
   * 查询可转单快递员
   */
  getCourierList = queryData => {
    const params = {
      orderId: queryData.orderId,
      destCourierNameOrMobile: queryData.text
    };
    request('/orders/switch/courier', {
      params
    }).then(({ results }) => {
      this.setState({
        data: results
      });
    });
  };

  /**
   * 搜索框改变
   */
  handleSearch = text => {
    clearTimeout(timer);
    const { queryData: prev } = this.state;
    const queryData = Object.assign({}, prev, { text });
    this.setState({
      queryData
    });
    // 去抖debounce
    timer = setTimeout(() => {
      this.getCourierList(queryData);
    }, 500);
  };

  /**
   * 快递员列表
   */
  renderItem = ({ item, index }) => {
    const { data } = this.state;
    const lastIndex = data.length - 1;
    return (
      <Flex style={styles.item}>
        <Image source={icon} style={styles.icon} />
        <Flex
          style={[styles.right, index !== lastIndex ? commonStyles.borderBottom : '']}
          justify='between'
        >
          <Flex direction='column' align='start' justify='center'>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.mobile}>{item.mobile}</Text>
          </Flex>
          <Button
            type='plain'
            title='转给TA'
            style={styles.btn}
            onPress={() => this.openModal(item)}
          />
        </Flex>
      </Flex>
    );
  };

  /**
   * 确认转单
   */
  transferOrder = () => {
    const {
      queryData: { orderId },
      activeCourier: { courierId }
    } = this.state;
    const queryData = {
      orderId,
      destCourierId: courierId
    };
    request('/orders/switch/from_requ', {
      method: 'post',
      params: queryData
    }).then(({ result }) => {
      if (result) {
        this.setState({
          isVisible: false
        });
        const { navigation } = this.props;
        Toast.info('成功发起转单申请');
        navigation.goBack();
      }
    });
  };

  /**
   * 打开确认转单modal
   */
  openModal = item => {
    this.setState({
      isVisible: true,
      activeCourier: item
    });
  };

  /**
   * 关闭modal
   */
  closeModal = () => {
    this.setState({
      isVisible: false
    });
  };

  /**
   * FlatList key
   */
  keyExtractor = item => String(item.courierId);

  render() {
    const {
      data,
      isVisible,
      activeCourier,
      queryData: { text }
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <SearchInput
            text={text}
            placeholder='请输入姓名/手机号码'
            onChangeText={this.handleSearch}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ListEmptyComponent={<EmptySearch style={styles.emptyImg} />}
        />
        <Modal
          leftText='确定'
          rightText='取消'
          highLightPosition='left'
          title='转单'
          isVisible={isVisible}
          onLeft={this.transferOrder}
          onRight={this.closeModal}
        >
          <Flex justify='center' style={styles.modal}>
            <Text style={styles.modalTxt}>将这笔订单转给配送员</Text>
            <Text style={styles.modalActive}>{activeCourier.name}</Text>
            <Text style={styles.modalTxt}>?</Text>
          </Flex>
        </Modal>
      </View>
    );
  }
}

export default TransferOrder;
