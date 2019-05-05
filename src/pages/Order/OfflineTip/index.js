import React from 'react';
import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from '@ant-design/react-native';
import PropTypes from 'prop-types';

const img = require('../images/pic_open.png');

const OfflineTip = ({ onOnLine }) => (
  <View style={styles.container}>
    <Image source={img} style={styles.img} />
    <Text style={styles.title}>休息期间，放佛错过一个亿～</Text>
    <Text style={styles.txt}>骑士星球，每月多赚500元</Text>
    <Button style={styles.btn}>
      <Text style={styles.btnTxt} onPress={onOnLine}>
        马上开工
      </Text>
    </Button>
  </View>
);

OfflineTip.propTypes = {
  onOnLine: PropTypes.func
};

OfflineTip.defaultProps = {
  onOnLine: () => {}
};

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff'
  },
  img: {
    position: 'absolute',
    left: '50%',
    top: '-175rem',
    marginLeft: '-160rem',
    width: '235rem',
    height: '206rem'
  },
  title: {
    textAlign: 'center',
    marginTop: '80rem',
    marginBottom: '10rem',
    fontSize: '30rem',
    color: '$headingColor'
  },
  txt: {
    textAlign: 'center',
    color: '$textColor'
  },
  btn: {
    marginHorizontal: '100rem',
    marginVertical: '80rem',
    backgroundColor: '$primaryColor'
  },
  btnTxt: {
    color: '#fff'
  }
});

export default OfflineTip;
