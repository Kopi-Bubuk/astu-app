import { StyleSheet } from 'react-native';
import { scaleFont, scaleHeight, scaleWidth } from './utils/Scale';
import color from './utils/Color';

const styles = StyleSheet.create({
  app: {
		flex: 1
	},
	backgroundMask: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
		opacity: 0.7,
	},
	bottomSheetContent: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: scaleWidth(20),
		marginBottom: scaleHeight(12),
	},
	bottomSheetImage: {
		width: scaleWidth(200),
		height: scaleHeight(200),
		resizeMode: 'contain',
		marginTop: scaleHeight(20),
		marginBottom: scaleHeight(20),
	},
	bottomSheetDesc: {
		color: color.grey,
		fontSize: scaleFont(15),
		lineHeight: scaleFont(21),
		textAlign: 'center',
		marginBottom: scaleHeight(20),
	},
});

export default styles;
