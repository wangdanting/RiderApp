import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    marginTop: '70rem',
    marginBottom: '10rem',
    width: '100%'
  },
  title: {
    position: 'absolute',
    fontSize: '30rem',
    backgroundColor: '#fff',
    color: '$headingColor',
    width: '180rem',
    textAlign: 'center',
    left: '50%',
    marginLeft: '-90rem',
    zIndex: 100
  },
  divider: {
    width: '100%',
    height: '1rem',
    backgroundColor: '$borderColorBase'
  },
  label: {
    marginTop: '30rem',
    fontSize: '30rem',
    color: '$textColorSecondary',
    textAlign: 'center',
    lineHeight: '60rem'
  },
  value: {
    fontWeight: '500',
    fontSize: '40rem',
    textAlign: 'center',
    lineHeight: '60rem'
  },
  orange: {
    color: '#ee7701'
  },
  grey: {
    color: '#5b5b5b'
  },
  red: {
    color: '#ff3636'
  }
});

export default styles;
