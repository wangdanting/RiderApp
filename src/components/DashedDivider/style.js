import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  wrapperStyle: {
    height: 1,
    overflow: 'hidden'
  },
  lineStyle: {
    width: '100%',
    height: 0,
    borderColor: '$borderColorBase',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 0.1
  },
  lineMask: {
    marginTop: -1,
    height: 1,
    backgroundColor: '#fff'
  }
});

export default styles;
