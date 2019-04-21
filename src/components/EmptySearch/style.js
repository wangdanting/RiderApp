import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: '-100rem'
  },
  img: {
    width: '250rem',
    height: '232rem'
  },
  title: {
    color: '$textColor',
    lineHeight: '80rem'
  }
});

export default styles;
