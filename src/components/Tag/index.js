import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Tag = () => (
  <View style={styles.container}>
    <Flex>
      <View style={[styles.tag, styles.pink]}>
        <Text style={[styles.tagTxt, styles.pink]}>预约</Text>
      </View>
      <View style={[styles.tag, styles.yellow]}>
        <Text style={[styles.tagTxt, styles.yellow]}>代购</Text>
      </View>
      <View style={[styles.tag, styles.purple]}>
        <Text style={[styles.tagTxt, styles.purple]}>指定商家</Text>
      </View>
      <View style={[styles.tag, styles.blue]}>
        <Text style={[styles.tagTxt, styles.blue]}>94懒 #123</Text>
      </View>
    </Flex>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    marginTop: '20rem'
  },
  tag: {
    marginRight: '10rem',
    paddingHorizontal: '15rem',
    paddingVertical: '5rem',
    backgroundColor: 'grey',
    borderRadius: 20
  },
  tagTxt: {
    fontSize: '30rem'
  },
  pink: {
    backgroundColor: '#ffdad9',
    color: '#fe5251'
  },
  yellow: {
    backgroundColor: '#ffecc5',
    color: '#ffa302'
  },
  purple: {
    backgroundColor: '#eddaf6',
    color: '#a556d3'
  }
});

export default Tag;
