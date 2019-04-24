import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: '20rem',
    paddingTop: '30rem'
  },
  order: {
    fontSize: '35rem',
    color: '$textColor'
  },
  orderId: {
    marginLeft: '10rem',
    fontSize: '35rem',
    color: '$textColor'
  },
  time: {
    fontSize: '30rem',
    color: '$textColorSecondary'
  }
});

export default styles;
