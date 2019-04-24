import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    marginHorizontal: '30rem'
  },
  title: {
    fontWeight: '900',
    fontSize: '40rem',
    textAlign: 'center',
    lineHeight: '150rem',
    color: '$headingColor'
  },
  content: {
    paddingBottom: '180rem'
  },
  btnGroup: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '110rem'
  },
  btn: {
    flex: 1
  },
  btnTxt: {
    fontSize: '30rem',
    textAlign: 'center'
  },
  highLight: {
    color: '$primaryColor'
  },
  loading: {
    paddingRight: '20rem'
  }
});

export default styles;
