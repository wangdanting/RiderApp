/**
 * @file: 取件、收件信息展示组件
 * @author：王丹婷
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Flex } from '@ant-design/react-native';
import Divider from '../Divider';
import styles from './style';

const quIcon = require('./images/ic_qu_40.png');
const songIcon = require('./images/ic_song_40.png');
const naviIcon = require('./images/ic-navigation.png');

const AddressInfo = ({ quInfo, songInfo, isShowNaviQu, isShowNaviSong, NaviOnPress }) => (
  <View style={styles.container}>
    {quInfo.title ? (
      <View style={styles.item}>
        <Image style={styles.qu} source={quIcon} />
        <Flex>
          <View style={styles.itemLeft}>
            <Text style={styles.title}>{quInfo.title}</Text>
            {quInfo.subtitle ? <Text style={styles.subtitle}>{quInfo.subtitle}</Text> : null}
          </View>
          {isShowNaviQu ? (
            <TouchableOpacity style={styles.naviContainer} onPress={NaviOnPress}>
              <Flex style={styles.navi} direction='column' justify='center'>
                <Image style={styles.naviIcon} source={naviIcon} />
                <Text style={styles.naviTxt}>导航</Text>
              </Flex>
            </TouchableOpacity>
          ) : null}
        </Flex>
      </View>
    ) : null}
    {quInfo.title && songInfo.title ? <Divider /> : null}
    {songInfo.title ? (
      <View style={styles.item}>
        <Image style={styles.song} source={songIcon} />
        <Flex>
          <View style={styles.itemLeft}>
            <Text style={styles.title}>{songInfo.title}</Text>
            <Text style={styles.name}>{songInfo.name}</Text>
          </View>
          {isShowNaviSong ? (
            <TouchableOpacity style={styles.naviContainer} onPress={NaviOnPress}>
              <Flex style={styles.navi} direction='column' justify='center'>
                <Image style={styles.naviIcon} source={naviIcon} />
                <Text style={styles.naviTxt}>导航</Text>
              </Flex>
            </TouchableOpacity>
          ) : null}
        </Flex>
      </View>
    ) : null}
  </View>
);

AddressInfo.propTypes = {
  quInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }), // 取件
  songInfo: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string
  }), // 收件
  isShowNaviQu: PropTypes.bool, // 是否展示导航 (取)
  isShowNaviSong: PropTypes.bool, // 是否展示导航 (送)
  NaviOnPress: PropTypes.func // 点击导航回调函数
};

AddressInfo.defaultProps = {
  quInfo: {
    title: '',
    subtitle: ''
  },
  songInfo: {
    title: '',
    name: ''
  },
  isShowNaviQu: false,
  isShowNaviSong: false,
  NaviOnPress: () => {}
};

export default AddressInfo;
