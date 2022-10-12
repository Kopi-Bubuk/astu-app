import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleFont, scaleHeight, scaleWidth } from '../../utils/Scale';

const styles = StyleSheet.create({
  asset: {
    backgroundColor: color.black,
    width: '100%',
    paddingHorizontal: scaleWidth(20),
    paddingBottom: scaleHeight(15),
  },
  assetTitle: {
    color: color.white,
    fontSize: scaleFont(12),
  },
  assetInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: scaleHeight(7),
  },
  assetAmount: {
    color: color.white,
    fontSize: scaleFont(21),
    fontWeight: '600',
    marginBottom: scaleHeight(3),
  },
  assetExchange: {
    fontSize: scaleFont(15),
    color: color.white,
  },
  tokenLogo: {
    width: scaleWidth(42),
    height: scaleHeight(42),
    resizeMode: 'contain',
    marginRight: scaleWidth(20),
  },
  warning: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: color.pink,
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(12),
    marginTop: scaleHeight(20),
    borderRadius: 12,
  },
  warningMessage: {
    color: color.red,
    fontSize: scaleFont(13.5),
  },
  warningLogo: {
    width: scaleWidth(36),
    height: scaleHeight(36),
    marginRight: scaleWidth(7),
    resizeMode: 'contain',
  },
});

export default styles;
