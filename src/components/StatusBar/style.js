import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {},
  date: {
    fontSize: '30rem',
    color: '$primaryColor',
    fontWeight: '900'
  },
  time: {
    paddingLeft: '10rem',
    fontSize: '30rem',
    color: '$primaryColor'
  },
  status: {
    paddingLeft: '10rem',
    fontSize: '30rem',
    color: '$textColor'
  },
  money: {
    fontSize: '30rem',
    color: '$redColor'
  },
  img: {
    width: '30rem',
    height: '30rem'
  },
  btn: {
    paddingHorizontal: '20rem',
    height: '70rem',
    borderWidth: '1rem',
    borderColor: '#666',
    borderRadius: '5rem'
  },
  btnText: {
    paddingLeft: '10rem',
    fontSize: '30rem'
  }
});

export default styles;
