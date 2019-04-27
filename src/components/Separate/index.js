import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { Flex } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import commonStyles from '@/common/styles/commonStyles';
import Divider from '@/components/Divider';
import styles from './style';

const Separate = ({ children }) => {
  const inner = children
    .filter(item => item)
    .map((item, index, arr) => {
      return (
        <Fragment key={item.props.title}>
          {item}
          {index !== arr.length - 1 && <Divider type='vertical' height='60rem' />}
        </Fragment>
      );
    });
  return <Flex style={[styles.container, commonStyles.borderTop]}>{inner}</Flex>;
};

const SeparateItem = ({ title, color }) => <Text style={[styles.txt, { color }]}>{title}</Text>;

Separate.propTypes = {
  children: PropTypes.node
};

Separate.defaultProps = {
  children: []
};

SeparateItem.propTypes = {
  title: PropTypes.string, // 显示的内容
  color: PropTypes.string // 内容颜色
};

SeparateItem.defaultProps = {
  title: '',
  color: '#666'
};

Separate.SeparateItem = SeparateItem;

export default Separate;
