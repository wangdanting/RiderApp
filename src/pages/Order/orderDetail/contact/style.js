import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '110rem',
    borderTopWidth: '1rem',
    borderColor: '$borderColorBase'
  },
  item: {
    flex: 1
  },
  txt: {
    fontSize: '30rem',
    color: '$textColor',
    textAlign: 'center'
  },
  icon: {
    marginRight: '15rem',
    width: '30rem',
    height: '30rem'
  }
});

export default styles;
