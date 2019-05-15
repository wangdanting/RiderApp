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
  mapInner: {
    width: '100%',
    height: '100%'
  },
  whiteBg: {
    backgroundColor: '#fff',
    paddingHorizontal: '30rem',
    paddingBottom: '20rem'
  }
});

export default styles;
