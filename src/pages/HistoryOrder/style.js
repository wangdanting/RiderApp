import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$backgroundColorBase',
    flex: 1
  },
  top: {
    paddingHorizontal: '30rem',
    height: '110rem',
    backgroundColor: '#fff'
  },
  placeholder: {
    fontSize: '30rem',
    color: '$disabledColor'
  },
  triangle: {
    marginLeft: '20rem',
    width: '18rem',
    height: '18rem'
  },
  money: {
    fontSize: '35rem',
    color: '$headingColor'
  },
  timePanel: {
    paddingLeft: '50rem',
    backgroundColor: '#fff'
  },
  item: {
    fontSize: '35rem',
    lineHeight: '100rem',
    color: '$headingColor'
  },
  active: {
    color: '$primaryColor'
  }
});

export default styles;
