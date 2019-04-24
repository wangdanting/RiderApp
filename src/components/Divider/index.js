import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const Divider = ({ type, color, width, height }) => {
  const styles = EStyleSheet.create({
    horizontal: {
      width: width || '100%',
      height: height || '1rem',
      backgroundColor: color
    },
    vertical: {
      width: width || '1rem',
      height: height || '100rem',
      backgroundColor: color
    }
  });
  return <View style={styles[type]} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Divider.defaultProps = {
  type: 'horizontal',
  color: '#e5e5e5',
  width: '',
  height: ''
};

export default Divider;
