import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {},
  time: {
    lineHeight: '80rem',
    textAlign: 'center',
    color: '$textColorSecondary'
  },
  content: {
    backgroundColor: '#fff'
  },
  tag: {
    marginRight: '20rem',
    width: '100rem',
    height: '100rem',
    backgroundColor: '#e1f2fa',
    borderRadius: 50
  },
  tagTxt: {
    color: '#0088d4',
    textAlign: 'center'
  },
  topTxt: {
    flex: 1,
    fontSize: '30rem',
    color: '$headingColor',
    lineHeight: '35rem'
  },
  active: {
    color: '$primaryColor',
    fontWeight: '900'
  },
  top: {
    paddingVertical: '20rem'
  },
  arrowTxt: {
    lineHeight: '80rem',
    fontSize: '35rem',
    color: '$textColor',
    flex: 1
  },
  arrow: {
    top: '-5rem',
    width: '20rem',
    height: '20rem',
    borderLeftWidth: '1rem',
    borderLeftColor: '$headingColor',
    borderBottomWidth: '1rem',
    borderBottomColor: '$headingColor',
    transform: [{ rotate: '-45deg' }]
  }
});

export default styles;
