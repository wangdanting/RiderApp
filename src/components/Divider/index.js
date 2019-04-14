import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const Divider = ({ type }) => <View style={[styles.divider, styles[type]]} />;

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical'])
};

Divider.defaultProps = {
  type: 'horizontal'
};

const styles = EStyleSheet.create({
  divider: {
    backgroundColor: '$borderColorBase'
  },
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
