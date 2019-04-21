import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    marginVertical: '20rem'
  },
  btn: {
    height: '100%',
    width: '100%',
    borderWidth: '1rem',
    borderColor: '$textColorSecondary'
  },
  icon: {
    marginRight: '20rem',
    width: '40rem',
    height: '40rem'
  },
  txt: {
    color: '$textColor',
    fontSize: '40rem'
  },
  primary: {
    backgroundColor: '$primaryColor',
    borderColor: '$primaryColor'
  },
  primaryTxt: {
    color: '#fff'
  },
  plain: {
    borderColor: '$primaryColor'
  },
  plainTxt: {
    color: '$primaryColor'
  },
  defaulttrue: {
    borderColor: '$borderColorBase'
  },
  defaulttrueTxt: {
    color: '$disabledColor'
  },
  primarytrue: {
    borderColor: '$borderColorBase',
    backgroundColor: '$borderColorBase'
  },
  primarytrueTxt: {
    color: '#fff'
  },
  plaintrue: {
    borderColor: '$borderColorBase'
  },
  plaintrueTxt: {
    color: '$disabledColor'
  }
});

export default styles;
