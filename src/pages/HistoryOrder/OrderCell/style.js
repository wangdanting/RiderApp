import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: '20rem'
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
    fontSize: '35rem',
    color: '$textColorSecondary'
  }
});

export default styles;
