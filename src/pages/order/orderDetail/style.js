import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '$backgroundColorBase'
  },
  map: {
    width: '100%',
    height: '400rem',
    backgroundColor: 'green'
  },
  whiteBg: {
    backgroundColor: '#fff',
    paddingHorizontal: '30rem'
  }
});

export default styles;
