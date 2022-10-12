import { StyleSheet } from 'react-native';
import color from "../../utils/Color";
import {
	scaleHeight,
	scaleFont,
	scaleWidth,
	scaleSize
} from "../../utils/Scale";

const styles = StyleSheet.create({
	input: {
		marginBottom: scaleHeight(20)
	},
	label: {
		color: color.grey,
		fontSize: scaleFont(12),
		marginBottom: scaleHeight(7)
	},
	inputBar: {
		backgroundColor: color.white,
		borderStyle: 'solid',
		borderColor: color.borderGrey,
		borderWidth: 1,
		borderRadius: 7,
		paddingVertical: scaleHeight(10.5),
		paddingHorizontal: scaleWidth(15),
		color: color.black
	},
	closeButton: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		margin: scaleSize(10)
	}
});

export default styles;
