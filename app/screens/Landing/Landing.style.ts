import { Dimensions, StyleSheet } from 'react-native';
import type { Animated } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleWidth, scaleFont } from '../../utils/Scale';

const windowWidth = Dimensions.get('window').width;

const styles = (index?: number, slideAnimation?: any, isActive?: boolean) => StyleSheet.create({
  icon: {
    maxWidth: '100%',
    width: scaleWidth(180),
    height: scaleHeight(180),
    alignItems: 'center',
    resizeMode: 'contain',
  },
  iconFull: {
    maxWidth: '100%',
    width: scaleWidth(240),
    height: scaleHeight(240),
    alignItems: 'center',
    resizeMode: 'contain',
  },
  iconWrapper: {
    backgroundColor: color.white,
    borderRadius: 200,
    width: scaleWidth(240),
    height: scaleWidth(240),
    marginBottom: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  noWrapper: {
    marginBottom: scaleHeight(40),
  },
  desc: {
    color: color.black,
    fontSize: scaleFont(15),
    textAlign: 'center',
    paddingHorizontal: scaleWidth(20),
    lineHeight: scaleHeight(36),
  },
  content: {
    paddingTop: scaleHeight(70),
    alignItems: 'center',
    margin: 0,
    width: scaleWidth(windowWidth),
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  slider: {
    flexDirection: 'row',
    left: scaleWidth(windowWidth / 2),
    justifyContent: 'center',
    transform: [{ translateX: slideAnimation ? slideAnimation : 0 }],
  },
  bulletWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaleHeight(40),
  },
  bullet: {
    width: scaleWidth(12),
    height: scaleWidth(12),
    borderRadius: 100,
    backgroundColor: color.white,
    opacity: isActive ? 1 : 0.24,
    marginHorizontal: scaleWidth(7),
  },
  sliderWrapper: {
    marginTop: scaleHeight(40),
  },
});

export default styles;
