import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  title: {
    paddingHorizontal: '30rem',
    lineHeight: '110rem',
    fontSize: '35rem',
    color: '$textColor'
  },
  content: {
    paddingHorizontal: '30rem',
    paddingBottom: '30rem',
    backgroundColor: '#fff'
  },
  label: {
    fontSize: '30rem',
    color: '$textColor'
  },
  value: {
    marginLeft: '30rem',
    fontSize: '30rem',
    color: '$headingColor'
  },
  item: {
    marginTop: '30rem'
  }
});

export default styles;
