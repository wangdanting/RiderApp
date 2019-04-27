import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    marginTop: '20rem',
    paddingVertical: '30rem',
    paddingHorizontal: '50rem',
    backgroundColor: '#fff'
  },
  divider: {
    flex: 1
  },
  title: {
    fontSize: '30rem',
    color: '$textColorSecondary'
  },
  subtitle: {
    fontSize: '30rem',
    color: '$headingColor'
  },
  dot: {
    marginVertical: '15rem',
    width: '36rem',
    height: '36rem'
  }
});

export default styles;
