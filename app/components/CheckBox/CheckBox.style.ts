import { StyleSheet } from 'react-native';
import { scaleSize } from '../../utils/Scale';
import color from '../../utils/Color';

const styles = (customColor: string) => StyleSheet.create({
  checkbox: {
    width: scaleSize(24),
    height: scaleSize(24),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: customColor ? customColor : color.black,
  },
  checkboxActive: {
    width: scaleSize(24),
    height: scaleSize(24),
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: color.black,
    backgroundColor: color.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
