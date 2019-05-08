import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColorBase'
  },
  search: {
    paddingHorizontal: '30rem',
    paddingVertical: '20rem',
    backgroundColor: '#fff'
  },
  btn: {
    width: '180rem',
    height: '80rem'
  },
  item: {
    backgroundColor: '#fff',
    height: '160rem'
  },
  right: {
    flex: 1,
    height: '100%',
    paddingRight: '30rem'
  },
  icon: {
    marginHorizontal: '30rem',
    width: '90rem',
    height: '90rem'
  },
  name: {
    marginBottom: '10rem',
    fontSize: '35rem',
    color: '$headingColor'
  },
  mobile: {
    fontSize: '30rem',
    color: '$textColor'
  },
  modalTxt: {
    color: '$headingColor'
  },
  modalActive: {
    color: '$primaryColor',
    fontWeight: '900',
    paddingHorizontal: '10rem'
  },
  emptyImg: {
    marginTop: '300rem'
  },
  modal: {
    marginBottom: '70rem'
  }
});

export default styles;
