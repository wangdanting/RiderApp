import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: '120rem',
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
    zIndex: 100000,
    maxHeight: '630rem'
  },
  content: {
    width: '100%',
    maxHeight: '630rem'
  },
  item: {
    paddingVertical: '30rem',
    paddingRight: '50rem',
    marginHorizontal: '30rem'
  },
  mobile: {
    fontSize: '35rem',
    color: '$primaryColor'
  },
  name: {
    marginLeft: '40rem',
    fontSize: '35rem'
  },
  addr: {
    marginTop: '5rem',
    fontSize: '35rem',
    color: '$textColor',
    lineHeight: '50rem'
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '80rem',
    height: '80rem'
  },
  icon: {
    top: '20rem',
    left: '20rem',
    width: '40rem',
    height: '40rem'
  }
});

export default styles;
