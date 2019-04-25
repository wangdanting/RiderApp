import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColorBase'
  },
  content: {
    marginTop: '20rem',
    paddingHorizontal: '30rem',
    backgroundColor: '#fff',
    zIndex: 1000
  },
  icon: {
    marginTop: '120rem',
    marginRight: '30rem',
    width: '60rem',
    height: '60rem'
  },
  info: {
    flex: 1,
    position: 'relative'
  },
  item: {
    height: '120rem'
  },
  label: {
    fontSize: '35rem',
    color: '$textColor'
  },
  input: {
    flex: 1,
    fontSize: '35rem'
  },
  btn: {
    marginTop: '50rem',
    marginHorizontal: '30rem',
    height: '120rem'
  },
  arrow: {
    width: '20rem',
    height: '20rem',
    borderColor: '$textColor',
    borderTopWidth: '1rem',
    borderRightWidth: '1rem',
    transform: [{ rotate: '45deg' }]
  },
  modal: {
    textAlign: 'center',
    color: '$headingColor'
  }
});

export default styles;
