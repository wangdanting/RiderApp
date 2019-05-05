import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: '60rem'
  },
  wrap: {
    flex: 1
  },
  title: {
    color: '$headingColor',
    fontSize: '48rem',
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: '400rem',
    letterSpacing: '20rem'
  },
  label: {
    color: '$textColor',
    fontSize: '30rem',
    marginTop: '30rem',
    marginBottom: '20rem',
    paddingLeft: '5rem'
  },
  item: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: '44rem',
    // lineHeight: '120rem'
    height: '120rem'
  },
  sms: {},
  sms_txt: {
    color: '$primaryColor',
    fontSize: '30rem',
    lineHeight: '100rem'
  },
  countDown: {
    color: '$textColorSecondary'
  },
  form: {
    marginBottom: '60rem'
  },
  btn: {
    height: '110rem',
    backgroundColor: '$primaryColor',
    borderRadius: 2,
    borderWidth: 0
  },
  protocol: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  protocol_txt: {
    color: '$textColor',
    fontSize: '30rem',
    lineHeight: '100rem',
    textAlign: 'center'
  },
  protocol_inner: {
    color: '$primaryColor'
  }
});

export default styles;
