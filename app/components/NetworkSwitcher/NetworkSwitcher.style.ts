import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleSize,
  scaleWidth,
  scaleFont,
} from '../../utils/Scale';
import color from '../../utils/Color';

const styles = StyleSheet.create({
  network: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.white,
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 1,
    padding: scaleHeight(5),
    paddingHorizontal: scaleWidth(12),
    marginTop: scaleHeight(15),
  },
  networkLabel: {
    fontSize: scaleFont(12),
    color: color.white,
  },
  networkStatus: {
    backgroundColor: color.green,
    width: scaleSize(12),
    height: scaleSize(12),
    borderRadius: 12,
    marginRight: scaleWidth(7),
  },
});

export default styles;
