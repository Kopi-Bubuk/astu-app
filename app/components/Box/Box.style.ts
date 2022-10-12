import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleSize, scaleFont } from '../../utils/Scale';

const style = StyleSheet.create({
  box: {
    backgroundColor: color.backgroundGrey,
    padding: scaleSize(20),
    borderWidth: 1,
    borderColor: color.borderGrey,
    borderStyle: 'solid',
  },
  boxText: {
    fontSize: scaleFont(15),
    lineHeight: scaleFont(24),
  },
});

export default style;
