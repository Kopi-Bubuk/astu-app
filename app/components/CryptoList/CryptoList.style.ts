import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleWidth, scaleFont, scaleSize } from "../../utils/Scale";

const styles = StyleSheet.create({
  list: {
    backgroundColor: color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.borderGrey,
    borderRadius: 12,
    marginBottom: scaleHeight(12),
  },
  token: {
    fontWeight: '600',
    marginBottom: scaleHeight(3),
    fontSize: scaleFont(15),
  },
  amount: {
    fontWeight: '600',
    marginBottom: scaleHeight(3),
    textAlign: 'right',
    fontSize: scaleFont(15),
  },
  icon: {
    width: scaleWidth(32),
    height: scaleHeight(32),
    marginRight: scaleWidth(12),
    resizeMode: 'contain',
  },
  leftBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBar: {
    justifyContent: 'center',
  },
  rates: {
    fontSize: scaleFont(13.5),
    color: color.grey,
		marginRight: scaleWidth(5)
  },
  amountIdr: {
		textAlign: 'right',
    fontSize: scaleFont(13.5),
    color: color.grey,
  },
	ethIcon: {
		width: scaleSize(36),
		height: scaleSize(36),
		borderRadius: scaleSize(36),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.grey,
		marginRight: scaleWidth(12)
	},
	changesIncrease: {
		fontSize: scaleFont(13.5),
		color: color.green,
		marginLeft: scaleWidth(3)
	},
	changesDecrease: {
		fontSize: scaleFont(13.5),
		color: color.red,
		marginLeft: scaleWidth(3)
	}
});

export default styles;
