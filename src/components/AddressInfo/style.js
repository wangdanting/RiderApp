import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    marginLeft: '80rem'
  },
  item: {
    position: 'relative',
    paddingVertical: '25rem'
  },
  title: {
    fontSize: '40rem',
    fontWeight: '900',
    color: '$headingColor',
    lineHeight: '48rem',
    marginBottom: '20rem'
  },
  subtitle: {
    color: '$textColor',
    fontSize: '26rem',
    lineHeight: '30rem'
  },
  name: {
    color: '$headingColor',
    fontSize: '40rem'
  },
  qu: {
    position: 'absolute',
    left: '-80rem',
    top: '30rem',
    width: '45rem',
    height: '45rem'
  },
  song: {
    position: 'absolute',
    left: '-80rem',
    top: '30rem',
    width: '45rem',
    height: '45rem'
  },
  itemLeft: {
    flex: 1
  },
  naviContainer: {
    paddingLeft: '30rem'
  },
  navi: {
    width: '120rem',
    height: '120rem',
    borderWidth: '1rem',
    borderColor: '$textColorSecondary',
    borderRadius: 5
  },
  naviIcon: {
    width: '40rem',
    height: '40rem'
  },
  naviTxt: {
    marginTop: '10rem',
    fontSize: '30rem',
    color: '$textColorSecondary'
  }
});

export default styles;
