import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    marginTop: '20rem',
    backgroundColor: '#fff',
    paddingHorizontal: '60rem'
  },
  label: {
    fontSize: '40rem',
    color: '$headingColor',
    lineHeight: '150rem'
  },
  icon: {
    width: '16rem',
    height: '28rem'
  }
});

export default styles;
