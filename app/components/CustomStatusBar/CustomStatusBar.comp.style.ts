import { Platform, StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight } from '../../utils/Scale';

const styles = (backgroundColor?: string) => StyleSheet.create({
  statusBar: {
    backgroundColor: backgroundColor ? backgroundColor : 'pink',
    height: Platform.OS === 'ios' ? scaleHeight(100) : scaleHeight(40),
    position: Platform.OS === 'ios' ? 'absolute' : 'relative',
    top: 0,
    left: 0,
    width: '100%',
  },
  statusBarWeb: {
    backgroundColor: color.black,
    height: Platform.OS === 'ios' ? scaleHeight(100) : scaleHeight(60),
    position: Platform.OS === 'ios' ? 'absolute' : 'relative',
    top: 0,
    left: 0,
    width: '100%',
  },
});

export default styles;
