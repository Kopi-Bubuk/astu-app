import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import {
  scaleFont,
  scaleHeight,
  scaleWidth,
  windowWidth,
} from '../../utils/Scale';

const styles = StyleSheet.create({
  receiver: {
    width: '100%',
  },
  receiverLabel: {
    backgroundColor: color.backgroundGrey,
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(20),
    fontSize: scaleFont(12),
    color: color.grey,
  },
  receiverEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: scaleHeight(160),
  },
  receiverEmptyLabel: {
    fontSize: scaleFont(15),
    color: color.grey,
  },
  receiverAddress: {
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleHeight(20),
  },
  address: {
    width: '100%',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
  },
  addressLabel: {
    fontSize: scaleFont(15),
    color: color.grey,
    marginBottom: scaleHeight(12),
  },
  addressLabelError: {
    fontSize: scaleFont(15),
    color: color.red,
    marginBottom: scaleHeight(12),
  },
  addressInput: {
    borderColor: color.borderGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    height: scaleHeight(42),
    paddingHorizontal: scaleWidth(12),
    paddingVertical: 0,
    width: windowWidth() - scaleWidth(100),
    borderRadius: 4,
    color: color.black,
    fontSize: scaleFont(15),
    lineHeight: scaleFont(18),
    includeFontPadding: false,
  },
  addressInputError: {
    borderColor: color.red,
    borderWidth: 1,
    borderStyle: 'solid',
    height: scaleHeight(42),
    paddingHorizontal: scaleWidth(12),
    paddingVertical: 0,
    width: windowWidth() - scaleWidth(100),
    borderRadius: 4,
    color: color.black,
    fontSize: scaleFont(15),
    lineHeight: scaleFont(18),
    includeFontPadding: false,
  },
  addressButton: {
    backgroundColor: color.black,
    width: scaleWidth(50),
    height: scaleHeight(42),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  addressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scanIcon: {
    width: scaleWidth(21),
    resizeMode: 'contain',
  },
  addressNotFound: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaleHeight(200),
  },
  addressNotFoundLabel: {
    color: color.grey,
    fontSize: scaleFont(15),
    lineHeight: scaleFont(24),
    textAlign: 'center',
    marginTop: scaleHeight(20),
    width: scaleWidth(340),
  },
  addressNotFoundImage: {
    width: scaleWidth(200),
    height: scaleHeight(200),
    resizeMode: 'contain',
  },
  addressList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.borderGrey,
    width: '100%',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
    borderRadius: 8,
  },
  addressListText: {
    fontSize: scaleFont(15),
  },
  addressIcon: {
    width: scaleWidth(40),
    height: scaleHeight(40),
    marginRight: scaleWidth(12),
    resizeMode: 'contain',
  },
});

export default styles;
