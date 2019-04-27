import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import EmptySearch from '@/components/EmptySearch';
import OrderCell from '../OrderCell';
import styles from './style';

const keyExtractor = item => String(item.expressOrderId);

const renderItem = ({ item }) => <OrderCell item={item} />;

// const abc = () => {
//   console.log('xx');
// };

const OrderList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={<EmptySearch style={styles.emptyImg} />}
      // onEndReached={abc}
      // onEndReachedThreshold={0.1}
    />
  );
};

OrderList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

OrderList.defaultProps = {
  data: []
};

renderItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any)
};

renderItem.defaultProps = {
  item: {}
};

export default OrderList;
