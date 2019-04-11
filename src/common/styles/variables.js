import { Dimensions } from 'react-native';

const variables = {
  $primaryColor: '#f08300', // 全局主色
  $linkColor: '#f08300', // 链接色
  $fontSizeBase: '28rem', // 主字号
  $headingColor: '#121212', // 标题色
  $textColor: '#666', // 主文本色
  $textColorSecondary: '#999', // 次文本色
  $disabledColor: 'rgba(0, 0, 0, .25)', // 失效色
  $borderColorBase: '#e5e5e5', // 边框色
  $deviceWidth: Dimensions.get('window').width, // 设备的宽度
  $deviceHeight: Dimensions.get('window').height // 设备的高度
};

export default variables;
