import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '$backgroundColorBase'
  },
  block: {
    backgroundColor: '#fff',
    paddingHorizontal: '50rem'
  },
  headImg: {
    marginVertical: '30rem',
    width: '200rem',
    height: '200rem'
  },
  name: {
    marginBottom: '5rem',
    color: '$headingColor',
    fontSize: '35rem',
    textAlign: 'center'
  },
  phone: {
    marginBottom: '40rem',
    color: '$headingColor',
    fontSize: '35rem',
    textAlign: 'center'
  },
  switch: {
    width: '300rem'
  },
  signOut: {
    marginTop: '20rem',
    backgroundColor: '#fff',
    paddingHorizontal: '60rem'
  },
  label: {
    fontSize: '40rem',
    color: '$headingColor',
    lineHeight: '150rem'
  },
  icon: {
    width: '38rem',
    height: '35rem'
  },
  version: {
    fontSize: '30rem',
    color: '$textColorSecondary',
    textAlign: 'center',
    lineHeight: '110rem'
  },
  modal: {
    textAlign: 'center'
  }
});

export default styles;
