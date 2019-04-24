import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    paddingVertical: '30rem'
  },
  daigouIcon: {
    marginRight: '20rem',
    width: '80rem',
    height: '28rem'
  },
  detailTxt: {
    flex: 1,
    fontSize: '30rem',
    color: '$headingColor'
  },
  estimate: {
    paddingTop: '20rem'
  },
  moneyIcon: {
    marginLeft: '100rem',
    width: '24rem',
    height: '24rem'
  },
  feeTitle: {
    marginLeft: '10rem',
    color: '#8fa3b6',
    fontSize: '24rem'
  },
  fee: {
    marginLeft: '5rem',
    color: '#8fa3b6',
    fontSize: '24rem'
  }
});

export default styles;
