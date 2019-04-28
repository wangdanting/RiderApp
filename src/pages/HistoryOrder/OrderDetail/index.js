import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import AddressInfo from '@/components/AddressInfo';
import Tag from '@/components/Tag';
import Daigou from '@/components/Daigou';
import Separate from '@/components/Separate';
import Steps from '@/components/Steps';
import DescriptionList from '@/components/DescriptionList';
import styles from './style';

const { SeparateItem } = Separate;
const { Description } = DescriptionList;
const abnormalIcon = require('./images/sign_abnormal.png');

const OrderDetail = ({ navigation }) => {
  const item = navigation.getParam('data');
  const quInfo = {
    title: item.fromBusinessName,
    subtitle: `${item.fromDistrictName} ${item.fromStreet} ${item.fromHouse}`
  };
  const songInfo = {
    title: `${item.destDistrictName} ${item.destStreet} ${item.destHouse}`,
    name: item.destName
  };
  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        {item.courierFinishAbnormalState ? (
          <Image source={abnormalIcon} style={styles.abnormal} />
        ) : null}
        <Tag
          orderWay={item.orderWay}
          orderType={item.orderType}
          orderLabel={item.orderLabel}
          shopType={item.shopType}
        />
        <AddressInfo quInfo={quInfo} songInfo={songInfo} />
        <Daigou orderRemark={item.orderRemark} estimateFee={item.estimateFee} />
      </View>
      <Separate>
        <SeparateItem title={`用时${item.distributionTimeFormat}分钟`} />
        {item.orderWay === 'applet-proxy' ? null : (
          <SeparateItem title={`距离${item.deliveryDistancekm}km`} />
        )}
        <SeparateItem title={`¥ ${item.courierSettleAmount}`} color='red' />
      </Separate>
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
};

OrderDetail.navigationOptions = {
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

OrderDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }) // 导航
};

OrderDetail.defaultProps = {
  navigation: {
    navigate: () => {}
  }
};

export default OrderDetail;
