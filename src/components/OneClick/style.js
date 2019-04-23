import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {},
  yijian: {
    height: '110rem'
  },
  orderId: {
    paddingVertical: '5rem',
    paddingHorizontal: '20rem',
    borderColor: '$primaryColor',
    borderWidth: '1rem',
    borderRadius: 50
  },
  orderIdTxt: {
    fontSize: '50rem',
    fontWeight: '900',
    color: '$primaryColor'
  },
  orderIdLabel: {
    fontSize: '30rem',
    color: '$primaryColor'
  }
});

export default styles;
