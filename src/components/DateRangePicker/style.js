import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100rem'
  },
  item: {
    flex: 1
  },
  icon: {
    marginRight: '15rem',
    width: '30rem',
    height: '30rem'
  },
  txt: {
    fontSize: '30rem',
    color: '$headingColor'
  },
  placehodler: {
    color: '$disabledColor'
  }
});

export default styles;
