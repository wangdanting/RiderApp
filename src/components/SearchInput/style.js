import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    paddingLeft: '90rem',
    position: 'relative',
    width: '100%',
    height: '80rem',
    backgroundColor: '$backgroundColorBase',
    borderRadius: 20
  },
  icon: {
    position: 'absolute',
    top: '20rem',
    left: '30rem',
    width: '40rem',
    height: '40rem'
  },
  input: {
    width: '100%',
    height: '100%'
  }
});

export default styles;
