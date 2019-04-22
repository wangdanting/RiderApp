import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {},
  time: {
    lineHeight: '80rem',
    textAlign: 'center',
    color: '$textColorSecondary'
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 5
  },
  title: {
    fontSize: '30rem',
    color: '$headingColor',
    lineHeight: '130rem'
  },
  orderId: {
    color: '$textColor',
    lineHeight: '40rem'
  }
});

export default styles;
