import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  page: {
    position: 'relative',
    backgroundColor: '$backgroundColorBase',
    flex: 1
  },
  top: {
    paddingHorizontal: '30rem',
    height: '110rem',
    backgroundColor: '#fff',
    zIndex: 1000
  },
  time: {
    fontSize: '30rem',
    color: '$primaryColor'
  },
  placeholder: {
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
    position: 'absolute',
    top: '110rem',
    width: '100%',
    paddingLeft: '50rem',
    backgroundColor: '#fff',
    zIndex: 1000
  },
  item: {
    fontSize: '35rem',
    lineHeight: '100rem',
    color: '$headingColor'
  },
  active: {
    color: '$primaryColor'
  },
  layer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 999
  },
  tip: {
    marginTop: '140rem',
    color: '$textColorSecondary',
    textAlign: 'center'
  }
});

export default styles;
