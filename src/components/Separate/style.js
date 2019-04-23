import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100rem'
  },
  txt: {
    fontSize: '30rem',
    color: '$textColor',
    flex: 1,
    textAlign: 'center'
  }
});

export default styles;
