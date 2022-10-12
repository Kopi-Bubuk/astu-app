import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleWidth, scaleFont, scaleSize } from '../../utils/Scale';

const styles = (isActive?: boolean) => StyleSheet.create({
	actions: {
		width: '100%',
		paddingHorizontal: scaleWidth(20),
		marginBottom: scaleHeight(40),
	},
	actionTitle: {
		color: color.grey,
		fontSize: scaleFont(12)
	},
	version: {
		fontSize: scaleFont(13.5),
		color: color.grey,
		paddingVertical: scaleHeight(7),
		textAlign: 'center'
	},
	actionItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: scaleHeight(20),
		paddingHorizontal: scaleWidth(20),
		paddingVertical: scaleHeight(20),
		backgroundColor: color.white,
		borderColor: color.borderGrey,
		borderWidth: scaleSize(1),
		borderRadius: scaleSize(7)
	},
	icon: {
		resizeMode: 'contain',
		width: scaleWidth(30),
		height: scaleHeight(24),
		marginRight: scaleWidth(12)
	},
	actionList: {
		marginTop: scaleHeight(20),
		backgroundColor: color.white,
		borderColor: color.borderGrey,
		borderWidth: scaleSize(1),
		borderRadius: scaleSize(7),
		borderBottomWidth: 0,
		overflow: 'hidden'
	},
	actionListItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: scaleWidth(20),
		paddingVertical: scaleHeight(20),
		borderBottomColor: color.borderGrey,
		borderBottomWidth: scaleSize(1),
	},
	option: {
		width: scaleSize(21),
		height: scaleSize(21),
		borderColor: color.mainBlue,
		borderRadius: scaleSize(21),
		borderWidth: 1,
		borderStyle: 'solid',
		justifyContent: 'center',
		alignItems: 'center'
	},
	optionFill: {
		width: scaleSize(12),
		height: scaleSize(12),
		backgroundColor: isActive ? color.mainBlue : color.white,
		borderRadius: scaleSize(12),
	}
});

export default styles;
