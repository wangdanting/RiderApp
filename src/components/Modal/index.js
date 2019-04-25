import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import commonStyles from '@/common/styles/commonStyles';
import Divider from '../Divider';
import styles from './style';

const closeIcon = require('../../common/images/ic_close_30.png');

class ModalScreen extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool, // 是否显示该modal
    title: PropTypes.string, // 标题
    children: PropTypes.node.isRequired, // 内容
    leftText: PropTypes.string, // 左边按钮文字
    leftConfirmLoading: PropTypes.bool, // 左边按钮loading
    onLeft: PropTypes.func, // 左边按钮点击回调
    rightText: PropTypes.string, // 右边按钮文字
    rightConfirmLoading: PropTypes.bool, // 右边按钮loading
    onRight: PropTypes.func, // 右边按钮点击回调
    highLightPosition: PropTypes.oneOf(['left', 'right']), // 高亮的位置
    isShowClose: PropTypes.bool // 是否显示关闭按钮
  };

  static defaultProps = {
    isVisible: false,
    title: '',
    leftText: '',
    leftConfirmLoading: false,
    onLeft: () => {},
    rightText: '',
    rightConfirmLoading: false,
    onRight: () => {},
    highLightPosition: 'right',
    isShowClose: false
  };

  render() {
    const {
      isVisible,
      children,
      title,
      onLeft,
      onRight,
      highLightPosition,
      leftText,
      rightText,
      leftConfirmLoading,
      rightConfirmLoading,
      isShowClose
    } = this.props;
    return (
      <Modal isVisible={isVisible}>
        <View style={styles.modal}>
          {isShowClose ? (
            <TouchableOpacity>
              <Flex style={styles.close} justify='center'>
                <Image source={closeIcon} style={styles.closeIcon} />
              </Flex>
            </TouchableOpacity>
          ) : null}
          <Text style={styles.title}>{title}</Text>
          <View style={styles.content}>{children}</View>
          <Flex style={[styles.btnGroup, commonStyles.borderTop]}>
            {leftText ? (
              <TouchableOpacity onPress={onLeft} style={styles.btn}>
                <Flex justify='center'>
                  {leftConfirmLoading && <ActivityIndicator size='small' style={styles.loading} />}
                  <Text
                    style={[
                      styles.btnTxt,
                      highLightPosition === 'left' || !rightText ? styles.highLight : ''
                    ]}
                  >
                    {leftText}
                  </Text>
                </Flex>
              </TouchableOpacity>
            ) : null}
            {leftText && rightText ? <Divider type='vertical' /> : null}
            {rightText ? (
              <TouchableOpacity onPress={onRight} style={styles.btn}>
                <Flex justify='center'>
                  {rightConfirmLoading && <ActivityIndicator size='small' style={styles.loading} />}
                  <Text
                    style={[
                      styles.btnTxt,
                      highLightPosition === 'right' || !leftText ? styles.highLight : ''
                    ]}
                  >
                    {rightText}
                  </Text>
                </Flex>
              </TouchableOpacity>
            ) : null}
          </Flex>
        </View>
      </Modal>
    );
  }
}

export default ModalScreen;
