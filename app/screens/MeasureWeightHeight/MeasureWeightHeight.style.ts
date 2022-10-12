import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleFont, scaleHeight, scaleSize, scaleWidth, windowWidth } from '../../utils/Scale';

const style = StyleSheet.create({
	container: {
		marginTop: scaleHeight(20),
		width: '100%'
	},
	collectionContainer: {
		margin: scaleWidth(16),
		flexDirection: "row",
		justifyContent: "space-between",
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
	descriptionContainer: {
		margin: scaleWidth(16),
	},
	descriptionLabel: {
		fontWeight: '600',
		color: color.black,
		fontSize: scaleFont(16),
		marginBottom: scaleFont(8),
	},
	descriptionValue: {
		color: color.black,
		fontSize: scaleFont(14),
	},
	separator: {
		marginHorizontal: scaleWidth(16),
		borderBottomColor: color.borderGrey20,
    	borderBottomWidth: StyleSheet.hairlineWidth,
	},
	image: {
		margin: scaleWidth(16),
		width: windowWidth() - scaleWidth(32),
		height: undefined,
		aspectRatio: 1,
		alignSelf: 'center',
		borderRadius: scaleSize(16),
		resizeMode: 'cover'
	},
	bottomButton: {
		margin: scaleWidth(16),
	},
});

export default style;
