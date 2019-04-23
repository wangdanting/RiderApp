import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  page: {
    backgroundColor: '$backgroundColorBase',
    flex: 1
  },
  container: {
    marginTop: '20rem',
    paddingHorizontal: '30rem',
    backgroundColor: '#fff'
  },
  abnormal: {
    position: 'absolute',
    right: '30rem',
    width: '150rem',
    height: '127rem'
  }
});

export default styles;
