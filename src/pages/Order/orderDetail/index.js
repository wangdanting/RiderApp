import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
// import { MapView, Marker } from 'react-native-amap3d';
import Tag from '@/components/Tag';
import StatusBar from '@/components/StatusBar';
import AddressInfo from '@/components/AddressInfo';
import Steps from '@/components/Steps';
import Daigou from '@/components/Daigou';
import DescriptionList from '@/components/DescriptionList';
import OneClick from '@/components/OneClick';
import Contact from './Contact';
import styles from './style';

const { Description } = DescriptionList;

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
        <Steps
          orderCreateTime={item.orderCreateTime}
          acceptTime={item.acceptTime}
          acceptOnTime={item.acceptOnTime}
          fetchTime={item.fetchTime}
          finishOnTime={item.finishOnTime}
          finishTime={item.finishTime}
        />
        <DescriptionList title='订单信息'>
          <Description label='订单类别' value={item.orderWayName} />
          {item.orderWay === 'applet-fast' ? (
            <Description label='一键下单单号' value={item.thirdOrderViewId} />
          ) : (
            <Description label='订单号码' value={item.expressOrderId} />
          )}
        </DescriptionList>
      </ScrollView>
    );
  }
}

export default OrderDetail;
