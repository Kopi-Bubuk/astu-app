import { StyleSheet } from 'react-native';
import {
	scaleHeight,
	scaleWidth,
	scaleFont,
} from '../../utils/Scale';
import color from '../../utils/Color';

const styles = StyleSheet.create({
	desc: {
		maxWidth: scaleWidth(300),
		fontSize: scaleFont(15),
		color: color.grey,
		textAlign: 'center',
		lineHeight: scaleFont(21)
	},
	image: {
		width: scaleWidth(200),
		height: scaleHeight(200),
		resizeMode: 'contain',
		marginBottom: scaleHeight(20)
	}
});

export default styles;
