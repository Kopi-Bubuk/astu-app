import { StyleSheet } from 'react-native';
import { scaleFont, scaleHeight, scaleWidth } from '../../utils/Scale';
import color from '../../utils/Color';

const styles = StyleSheet.create({
	receiverEmpty: {
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		height: scaleHeight(160),
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
});

export default styles;
