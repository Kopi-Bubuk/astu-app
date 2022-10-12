import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import {
  scaleFont,
  scaleHeight,
  scaleWidth,
  windowWidth,
} from '../../utils/Scale';

const styles = StyleSheet.create({
  collection: {
    width: '100%',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
  },
  box: {
    backgroundColor: color.white,
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(16),
    borderColor: color.borderGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  boxAddress: {
    paddingTop: scaleHeight(20),
    paddingBottom: scaleHeight(5),
    fontSize: scaleFont(13.5),
  },
  boxAddressAlias: {
    paddingBottom: scaleHeight(20),
    fontSize: scaleFont(12),
    color: color.grey,
  },
  boxCollectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collectionName: {
		fontWeight: '600',
		color: color.black60,
		fontSize: scaleFont(14),
		marginBottom: scaleFont(8),
	},
	collectionId: {
		fontWeight: '600',
		color: color.fullBlack,
		fontSize: scaleFont(20),
		marginBottom: scaleFont(8),
	},
	collectionOwnerContainer: {
		flexDirection: "row"},
	collectionOwnerLabel: {
		color: color.black60,
	},
	collectionOwnerValue: {
		fontWeight: '700',
		color: color.black60,
		marginLeft: scaleFont(4),
	},
  address: {
    width: '100%',
    paddingHorizontal: scaleWidth(20),
  },
  addressLabel: {
    fontSize: scaleFont(16),
    fontWeight: '600',
    color: color.grey,
    marginBottom: scaleHeight(12),
  },
  addressLabelError: {
    fontSize: scaleFont(15),
    color: color.red,
    marginBottom: scaleHeight(12),
  },
  addressInput: {
    backgroundColor: color.white,
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
    backgroundColor: color.white,
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
    width: scaleWidth(88),
    height: scaleHeight(88),
    marginRight: scaleWidth(12),
    resizeMode: 'contain',
  },
  buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
});

export default styles;
