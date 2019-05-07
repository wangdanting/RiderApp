import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  map: {
    width: '100%',
    height: '400rem',
    backgroundColor: 'green'
  },
  mapInner: {
    width: '100%',
    height: '100%'
  },
  info_box: {
    position: 'relative',
    marginBottom: '20rem',
    width: '234rem',
    height: '60rem',
    backgroundColor: '#fff',
    borderRadius: '40rem',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: '10rem', height: '10rem' },
    shadowOpacity: 1,
    shadowRadius: '40rem'
  },
  triangle: {
    position: 'absolute',
    width: '20rem',
    height: '20rem',
    backgroundColor: '#fff',
    bottom: '-10rem',
    left: '107rem',
    transform: [{ rotate: '45deg' }]
  },
  divider: {
    position: 'absolute',
    top: '10rem',
    left: '117rem',
    width: '1rem',
    height: '40rem',
    backgroundColor: '$borderColorBase'
  }
});

export default styles;
