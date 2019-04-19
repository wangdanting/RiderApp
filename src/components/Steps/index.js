import React from 'react';
import { View, Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Divider from '../Divider';

const dotActive = require('./images/dot_color.png');
const dot = require('./images/dot.png');

const Steps = () => (
  <Flex justify='between' style={styles.container}>
    <Flex direction='column'>
      <Text style={styles.title}>下单</Text>
      <Image source={dot} style={styles.dot} />
      <Text style={styles.subtitle}>14:38</Text>
    </Flex>
    <View style={styles.divider}>
      <Divider color='red' />
    </View>
    <Flex direction='column'>
      <Text style={styles.title}>接单</Text>
      <Image source={dotActive} style={styles.dot} />
      <Text style={styles.subtitle}>14:38</Text>
    </Flex>
    <View style={styles.divider}>
      <Divider color='red' />
    </View>
    <Flex direction='column'>
      <Text style={styles.title}>取件</Text>
      <Image source={dot} style={styles.dot} />
      <Text style={styles.subtitle} />
    </Flex>
    <View style={styles.divider}>
      <Divider color='red' />
    </View>
    <Flex direction='column'>
      <Text style={styles.title}>送达</Text>
      <Image source={dot} style={styles.dot} />
      <Text style={styles.subtitle}>14:38</Text>
    </Flex>
  </Flex>
);

const styles = EStyleSheet.create({
  container: {
    marginTop: '20rem',
    paddingVertical: '30rem',
    paddingHorizontal: '50rem',
    backgroundColor: '#fff'
  },
  divider: {
    flex: 1
  },
  title: {
    fontSize: '30rem',
    color: '$textColorSecondary'
  },
  subtitle: {
    fontSize: '30rem',
    color: '$headingColor'
  },
  dot: {
    marginVertical: '15rem',
    width: '36rem',
    height: '36rem'
  }
});

export default Steps;
