import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Tag from '@/components/Tag';
import StatusBar from '@/components/StatusBar';
import AddressInfo from '@/components/AddressInfo';
import Steps from '@/components/Steps';
import Daigou from '@/components/Daigou';
import DescriptionList from '@/components/DescriptionList';
import OneClick from '@/components/OneClick';
import Contact from './Contact';
import styles from './style';

class OrderDetail extends PureComponent {
  static navigationOptions = {
    title: '订单详情',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
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

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('data');
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
      <ScrollView style={styles.page}>
        <View style={styles.whiteBg}>
          <StatusBar date='14-29' time='14:20' status='前取件' money='8.5' />
          <Tag
            orderWay={item.orderWay}
            orderType={item.orderType}
            orderLabel={item.orderLabel}
            shopType={item.shopType}
          />
        </View>
        <View style={styles.map} />
        <View style={styles.whiteBg}>
          {item.orderWay === 'applet-fast' ? <OneClick id={item.thirdOrderViewId} /> : null}
          <AddressInfo quInfo={quInfo} songInfo={songInfo} />
          <Daigou orderRemark={item.orderRemark} estimateFee={item.estimateFee} />
          <Contact merchant={item.fromMobile} user={item.destMobile} />
        </View>
        <Steps />
        <DescriptionList />
      </ScrollView>
    );
  }
}

export default OrderDetail;
