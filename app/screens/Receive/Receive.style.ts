import { StyleSheet } from 'react-native';
import {scaleHeight, scaleSize, scaleWidth} from '../../utils/Scale';
import color from '../../utils/Color';

const styles = StyleSheet.create({
	statusTag: {
		backgroundColor: color.backgroundGrey,
		marginRight: scaleWidth(7),
		paddingHorizontal: scaleWidth(12),
		paddingVertical: scaleHeight(5),
		borderRadius: 7,
		overflow: 'hidden',
		marginTop: scaleHeight(12)
	}
});

export default styles;
