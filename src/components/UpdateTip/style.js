import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    position: 'relative'
  },
  bg: {
    width: '487rem',
    height: '297rem'
  },
  content: {
    top: '-2rem',
    paddingHorizontal: '60rem',
    width: '530rem',
    backgroundColor: '#fff',
    borderRadius: '20rem'
  },
  seperate: {
    marginVertical: '36rem',
    width: '34rem',
    height: '6rem',
    backgroundColor: '$primaryColor',
    borderRadius: '6rem'
  },
  title: {
    fontSize: '42rem',
    color: '$headingColor',
    fontWeight: '900'
  },
  version: {
    marginTop: '30rem',
    fontSize: '27rem',
    color: '$primaryColor',
    fontWeight: '900'
  },
  inner: {
    marginVertical: '30rem',
    marginTop: '40rem',
    height: '160rem',
    width: '100%'
  },
  item: {
    marginBottom: '5rem'
  },
  txt: {
    color: '$textColorSecondary',
    fontSize: '27rem',
    textAlign: 'left',
    lineHeight: '35rem'
  },
  dot: {
    marginRight: '15rem',
    top: '12rem',
    width: '12rem',
    height: '12rem',
    borderRadius: '50rem',
    backgroundColor: '$primaryColor'
  },
  btn: {
    marginVertical: '40rem',
    width: '340rem',
    height: '80rem',
    backgroundColor: '$primaryColor',
    borderRadius: '40rem'
  },
  btnTxt: {
    fontSize: '32rem',
    lineHeight: '80rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '900'
  },
  close: {
    position: 'absolute',
    top: '130rem',
    right: '30rem'
  },
  closeInner: {
    width: '60rem',
    height: '50rem'
  },
  closeIcon: {
    width: '21rem',
    height: '21rem'
  }
});

export default styles;
