import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleSize, scaleWidth } from '../../utils/Scale';

const styles = StyleSheet.create({
  tag: {
    backgroundColor: color.white,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.borderGrey,
    margin: scaleSize(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(10),
  },
  tagSelected: {
    backgroundColor: color.borderGrey,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.borderGrey,
    margin: scaleSize(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(10),
  },
  phrase: {
    fontSize: scaleSize(13.5),
    width: scaleWidth(60),
    margin: scaleSize(12),
    marginBottom: scaleHeight(10),
    textAlign: 'center',
  },
});

export default styles;
