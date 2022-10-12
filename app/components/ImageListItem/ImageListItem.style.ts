import { StyleSheet } from 'react-native';
import {
	scaleFont,
	scaleHeight,
	scaleWidth,
	windowWidth
} from '../../utils/Scale';
import color from '../../utils/Color';

const styles = StyleSheet.create({
	imageWrapper: {
		width: (windowWidth() / 2) - scaleWidth(25),
		borderRadius: 12,
		overflow: 'hidden',
		marginVertical: scaleWidth(7),
		marginHorizontal: scaleHeight(7),
		alignItems: 'center'
	},
	image: {
		resizeMode: 'cover',
		width: scaleWidth(200),
		height: scaleHeight(200),
		backgroundColor: color.backgroundGrey
	},
	caption: {
		width: '100%',
		padding: 12,
		backgroundColor: color.black,
		fontSize: scaleFont(12)
	},
	captionText: {
		color: color.white
	}
});

export default styles;
