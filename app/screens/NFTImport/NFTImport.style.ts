import { StyleSheet } from 'react-native';
import {scaleFont, scaleHeight, scaleSize, scaleWidth, windowWidth} from '../../utils/Scale';
import color from "../../utils/Color";

const style = (isActive?: boolean) => StyleSheet.create({
	title: {
		fontSize: scaleFont(15),
		color: color.grey,
		marginTop: scaleHeight(40),
		marginBottom: scaleHeight(20)
	},
	option: {
		backgroundColor: 'white',
		marginBottom: scaleHeight(20),
		padding: scaleSize(20),
		borderRadius: 7,
		borderWidth: 1,
		borderColor: isActive ? color.mainBlue : color.borderGrey,
		flexDirection: 'row',
		width: windowWidth() - scaleWidth(44)
	},
	optionIndicator: {
		width: scaleSize(32),
		height: scaleSize(32),
		backgroundColor: isActive ? color.mainBlue : color.borderGrey,
		borderRadius: 32,
		marginRight: scaleWidth(15),
		alignSelf: 'center'
	},
	optionTitle: {
		fontSize: scaleFont(18),
		marginBottom: scaleHeight(5)
	},
	optionSubtitle: {
		color: color.grey,
		fontSize: scaleFont(13.5)
	}
});

export default style;
