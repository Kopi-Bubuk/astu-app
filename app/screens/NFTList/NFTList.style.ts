import { StyleSheet } from 'react-native';
import color from "../../utils/Color";
import {
	scaleFont,
	scaleHeight,
	scaleSize,
	scaleWidth, windowWidth
} from "../../utils/Scale";

const style = StyleSheet.create({
	address: {
		backgroundColor: color.black,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: scaleSize(40)
	},
	addressLabel: {
		color: color.white,
		fontSize: scaleFont(15)
	},
	search: {
		marginTop: scaleHeight(20),
		flexDirection: 'row'
	},
	searchInput: {
		borderRadius: 10,
		borderStyle: 'solid',
		borderColor: color.borderGrey,
		borderWidth: 1,
		paddingHorizontal: scaleWidth(20),
		height: scaleHeight(54),
		marginRight: scaleWidth(12),
		width: windowWidth() - scaleWidth(192)
	},
	nftList: {
		height: '100%',
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: scaleSize(10)
	},
	emptyStateWrapper: {
		height: '100%',
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	patientStatus: {
		fontSize: 12,
		backgroundColor: color.backgroundGrey,
		padding: 7,
		paddingHorizontal: 12,
		// width: 120,
		textAlign: 'center',
		marginTop: 12,
		borderRadius: 7,
		overflow: 'hidden',
		marginRight: 7
	},
	patientStatusWarning: {
		fontSize: 12,
		backgroundColor: color.red,
		padding: 7,
		paddingHorizontal: 12,
		// width: 120,
		textAlign: 'center',
		marginTop: 12,
		borderRadius: 7,
		overflow: 'hidden',
		marginRight: 7,
		color: color.white
	},
	patientStatusEmpty: {
		width: 0,
		height: 0
	}
});

export default style;
