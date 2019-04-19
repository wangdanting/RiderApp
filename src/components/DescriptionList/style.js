import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  title: {
    paddingHorizontal: '50rem',
    lineHeight: '110rem',
    fontSize: '40rem',
    color: '$textColor'
  },
  content: {
    paddingHorizontal: '50rem',
    paddingBottom: '30rem',
    backgroundColor: '#fff'
  },
  label: {
    fontSize: '30rem',
    color: '$textColor'
  },
  value: {
    marginLeft: '50rem',
    fontSize: '30rem',
    color: '$headingColor'
  },
  item: {
    marginTop: '30rem'
  }
});

export default styles;
