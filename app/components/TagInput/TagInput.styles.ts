import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleFont } from '../../utils/Scale';

const styles = (text?: string) => StyleSheet.create({
  tag: {
    width: '100%',
    height: scaleHeight(32),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 20,
    borderColor: color.grey,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: text ? color.backgroundGrey : color.white,
  },
  tagLabel: {
    fontSize: scaleFont(15),
  },
});

export default styles;
