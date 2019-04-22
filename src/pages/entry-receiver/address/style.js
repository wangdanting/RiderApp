import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColorBase'
  },
  input: {
    paddingVertical: '20rem',
    paddingHorizontal: '30rem',
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: '30rem'
  },
  item: {
    paddingVertical: '30rem',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: '35rem',
    color: '$headingColor'
  },
  subtitle: {
    marginTop: '15rem',
    fontSize: '28rem',
    color: '$textColorSecondary'
  }
});

export default styles;
