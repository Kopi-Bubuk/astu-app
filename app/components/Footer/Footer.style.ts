import { Platform, StyleSheet } from 'react-native';
import { scaleHeight, scaleSize } from '../../utils/Scale';
import color from '../../utils/Color';

const getHeight = (type?: string) => {
  if (type === 'narrow') {
    return Platform.OS === 'ios' ? scaleHeight(120) : scaleHeight(80);
  } else {
    return Platform.OS === 'ios' ? scaleHeight(160) : scaleHeight(180);
  }
};

const style = (type?: string) =>
  StyleSheet.create({
    footer: {
      height: getHeight(type),
      backgroundColor: color.white,
      justifyContent: 'flex-end',
      paddingHorizontal: scaleSize(20),
      paddingTop: 0,
      paddingBottom: type === 'narrow' ? 0 : scaleHeight(12),
    },
  });

export default style;
