import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    height: '100rem',
    backgroundColor: '#fff'
  },
  txt: {
    color: '$textColor',
    fontSize: '30rem'
  },
  activeTxt: {
    color: '$primaryColor',
    fontWeight: '900'
  },
  item: {
    paddingVertical: '20rem',
    paddingHorizontal: '40rem'
  },
  activeItem: {
    borderColor: '$primaryColor',
    borderWidth: '1rem',
    borderRadius: 50
  }
});

export default styles;
