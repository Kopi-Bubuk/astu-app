import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleWidth } from '../../utils/Scale';

const style = StyleSheet.create({
  tabBarStyle: {
    elevation: 0,
    zIndex: 0,
  },
  tabBarItemStyle: {
    marginVertical: scaleHeight(5),
  },
  tabBarLabelStyle: {
    color: color.grey,
  },
  logoWrapper: {
    width: scaleWidth(160),
    height: scaleWidth(160),
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
	bottomSheetIcon: {
		marginBottom: scaleHeight(3)
	}
});

export default style;
