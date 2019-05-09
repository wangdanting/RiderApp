import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tag from '@/components/Tag';
import StatusBar from '@/components/StatusBar';
import AddressInfo from '@/components/AddressInfo';
import Steps from '@/components/Steps';
import Daigou from '@/components/Daigou';
import DescriptionList from '@/components/DescriptionList';
import OneClick from '@/components/OneClick';
import { MapLinking } from '@/utils';
import Contact from './Contact';
import Map from './Map';
import styles from './style';

const { Description } = DescriptionList;

class OrderDetail extends PureComponent {
  static navigationOptions = {
    title: '订单详情',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
      left: -20
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }), // 导航
    lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    navigation: {
      navigate: () => {}
    },
    lng: 106.534892,
    lat: 29.551891
  };

  /**
   * 打开导航
   */
  navLocation = () => {
    const { lng, lat, navigation } = this.props;
    const status = navigation.getParam('status');
    const item = navigation.getParam('data');
    const { fromLat, fromLng, destLat, destLng, fromStreet, destStreet } = item;

    const startLocation = {
      lng: Number(lng),
      lat: Number(lat),
      title: '得意世界'
    };
    const destLocation = {
      lng: status === 'sending' ? Number(destLng) : Number(fromLng),
      lat: status === 'sending' ? Number(destLat) : Number(fromLat),
      title: status === 'sending' ? destStreet : fromStreet
    };
    MapLinking(startLocation, destLocation);
  };

  render() {
    const { navigation, lng, lat } = this.props;

    const item = navigation.getParam('data');
    const status = navigation.getParam('status');

    // 取、送信息
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

    const { fromLat, fromLng, destLat, destLng } = item;

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
        <Map
          lng={Number(lng)}
          lat={Number(lat)}
          fromLat={Number(fromLat)}
          fromLng={Number(fromLng)}
          destLat={Number(destLat)}
          destLng={Number(destLng)}
        />

        <View style={styles.whiteBg}>
          {item.orderWay === 'applet-fast' ? <OneClick id={item.thirdOrderViewId} /> : null}
          <AddressInfo
            quInfo={quInfo}
            songInfo={songInfo}
            isShowNaviQu={['wait_write', 'wait_fetch'].includes(status)}
            isShowNaviSong={status === 'sending'}
            NaviOnPress={this.navLocation}
          />
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

const mapStateToProps = state => {
  return {
    lng: state.global.lng,
    lat: state.global.lat
  };
};

export default connect(mapStateToProps)(OrderDetail);
