import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Flex } from '@ant-design/react-native';
import styles from './style';

const Tabs = () => (
  <Flex style={styles.container} justify='around'>
    <TouchableOpacity>
      <Flex>
        <View style={[styles.item, styles.activeItem]}>
          <Text style={[styles.txt, styles.activeTxt]}>昨天</Text>
        </View>
      </Flex>
    </TouchableOpacity>
    <TouchableOpacity>
      <Flex>
        <View style={styles.item}>
          <Text style={styles.txt}>近7天</Text>
        </View>
      </Flex>
    </TouchableOpacity>
    <TouchableOpacity>
      <Flex>
        <View style={styles.item}>
          <Text style={styles.txt}>近30天</Text>
        </View>
      </Flex>
    </TouchableOpacity>
    <TouchableOpacity>
      <Flex>
        <View style={styles.item}>
          <Text style={styles.txt}>自定义</Text>
        </View>
      </Flex>
    </TouchableOpacity>
  </Flex>
);

export default Tabs;
