import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    marginTop: '20rem',
    paddingHorizontal: '30rem',
    paddingVertical: '20rem',
    backgroundColor: '#fff'
  },
  orderId: {
    color: '$textColor',
    lineHeight: '40rem'
  },
  btnGroup: {
    width: '100%'
  },
  turnBtn: {
    height: '110rem',
    width: '160rem'
  },
  receiveBtn: {
    marginLeft: '20rem',
    height: '110rem',
    flex: 1
  },
  returnBtn: {
    height: '110rem',
    flex: 1
  }
});

export default styles;
