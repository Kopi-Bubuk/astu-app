import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import {
  scaleFont,
  scaleHeight,
  scaleWidth,
  scaleSize,
} from '../../utils/Scale';

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.borderGrey,
    backgroundColor: color.white,
    paddingVertical: scaleHeight(7),
    paddingHorizontal: scaleWidth(12),
    borderRadius: 30,
    alignItems: 'center',
  },
  tagSmall: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.borderGrey,
    backgroundColor: color.white,
    paddingVertical: scaleHeight(5),
    paddingHorizontal: scaleWidth(15),
    borderRadius: 12,
  },
  tagLabel: {
    paddingLeft: scaleFont(12),
    fontSize: scaleFont(13.5),
    textAlign: 'center',
  },
  tagLabelSmall: {
    textAlign: 'center',
    fontSize: scaleFont(12),
  },
  index: {
    backgroundColor: color.black,
    width: scaleSize(24),
    height: scaleSize(24),
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexLabel: {
    fontSize: scaleFont(12),
    color: color.white,
  },
});

export default styles;
