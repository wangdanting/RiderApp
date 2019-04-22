import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    height: '120rem'
  },
  item: {
    flex: 1
  },
  txt: {
    textAlign: 'center',
    fontSize: '35rem',
    color: '$textColor'
  },
  active: {
    color: '$primaryColor'
  }
});

export default styles;
