import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '$backgroundColorBase'
  },
  tabBarUnderlineStyle: {
    backgroundColor: '$primaryColor'
  },
  taskImg: {
    right: '-20rem',
    width: '80rem',
    height: '160rem'
  },
  task: {
    position: 'absolute',
    top: '1000rem',
    right: '50rem'
  },
  modalTxt: {
    marginBottom: '30rem',
    color: '$textColor',
    textAlign: 'center'
  },
  modalTxt2: {
    marginBottom: '70rem',
    color: '$textColor',
    textAlign: 'center'
  }
});

export default styles;
