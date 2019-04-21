import React from 'react';
import { View, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const dotActive = require('./images/ic_search.png');

const SearchInput = ({ text, onChangeText, placeholder }) => (
  <View style={styles.container}>
    <Image source={dotActive} style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={text}
    />
  </View>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
  onChangeText: PropTypes.func
};

SearchInput.defaultProps = {
  placeholder: '请输入姓名/手机号码',
  text: '',
  onChangeText: () => {}
};

export default SearchInput;
