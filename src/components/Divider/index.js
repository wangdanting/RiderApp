import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const Divider = ({ type, color }) => <View style={[styles[type], { backgroundColor: color }]} />;

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  color: PropTypes.string
};

Divider.defaultProps = {
  type: 'horizontal',
  color: '#e5e5e5'
};

const styles = EStyleSheet.create({
  horizontal: {
    width: '100%',
    height: '1rem'
  },
  vertical: {
    width: '1rem',
    height: '100%'
  }
});

export default Divider;
