import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '$backgroundColorBase'
  },
  container: {
    paddingVertical: '40rem',
    marginTop: '20rem',
    backgroundColor: '#fff'
  },
  title: {
    marginBottom: '60rem'
  },
  tag: {
    width: '10rem',
    height: '40rem',
    backgroundColor: '$primaryColor'
  },
  titleTxt: {
    fontSize: '45rem',
    color: '$headingColor',
    fontWeight: '900',
    paddingLeft: '20rem'
  },
  label: {
    marginBottom: '20rem',
    fontSize: '30rem',
    color: '$textColorSecondary',
    textAlign: 'center'
  },
  money: {
    marginBottom: '60rem',
    fontSize: '80rem',
    fontWeight: '900',
    color: '#ca1315',
    textAlign: 'center'
  },
  order: {
    fontSize: '60rem',
    fontWeight: '600',
    color: '#ee7701',
    textAlign: 'center'
  },
  km: {
    fontSize: '60rem',
    fontWeight: '600',
    color: '#5b5b5b',
    textAlign: 'center'
  },
  item: {
    flex: 1
  },
  left: {
    fontSize: '35rem',
    color: '$headingColor'
  },
  right: {
    fontSize: '35rem',
    color: '$headingColor'
  },
  items: {
    paddingVertical: '20rem',
    paddingHorizontal: '30rem'
  }
});

export default styles;
