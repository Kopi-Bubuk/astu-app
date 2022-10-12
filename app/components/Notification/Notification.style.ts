import color from '../../utils/Color';
import {
  scaleFont,
  scaleSize,
  scaleWidth,
  windowWidth,
} from '../../utils/Scale';
import { StyleSheet } from 'react-native';
import type { TranslateYTransform, Animated } from 'react-native';

const styles = (
	type?: string,
	fadeAnimation?: any,
	slideAnimation?: TranslateYTransform['translateY']
) => StyleSheet.create({
  notification: {
    position: 'absolute',
    backgroundColor: type === 'success' ? color.green : color.red,
    elevation: 100,
    zIndex: 100,
    paddingVertical: scaleSize(21),
    paddingHorizontal: scaleSize(24),
    borderRadius: 12,
    flexDirection: 'row',
    top: 0,
    width: windowWidth() - scaleWidth(40),
		alignItems: 'center',
    alignSelf: 'center',
    opacity: fadeAnimation ? fadeAnimation : 0,
    transform: [{ translateY: slideAnimation ? slideAnimation : 0 }],
  },
  notificationLabel: {
    color: color.white,
    fontSize: scaleFont(13.5),
    fontWeight: 'bold',
    marginLeft: scaleWidth(15),
  },
	notificationCheck: {
		backgroundColor: 'white',
		height: scaleSize(24),
		width: scaleSize(24),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: scaleSize(24)
	}
});

export default styles;
