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
  },
  yijian: {
    height: '110rem'
  },
  orderId: {
    paddingVertical: '10rem',
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
