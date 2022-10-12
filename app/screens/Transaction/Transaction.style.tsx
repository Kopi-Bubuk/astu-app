import { Dimensions, StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleSize, scaleFont, scaleHeight } from '../../utils/Scale';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: color.white,
    minHeight: Dimensions.get('window').height,
  },
  tabBarLabelStyle: {
    color: color.white,
    textTransform: 'capitalize',
    fontSize: scaleFont(13.5),
    paddingBottom: scaleHeight(7),
  },
  tabBarContentContainerStyle: {
    backgroundColor: color.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBarItem: {
    height: scaleHeight(42),
    width: '50%',
    alignItems: 'center',
  },
  activeIndicator: {
    width: 0,
    height: 0,
    alignSelf: 'center',
    borderTopColor: 'transparent',
    borderBottomColor: 'white',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: scaleSize(6),
    borderBottomWidth: scaleSize(10),
    borderRightWidth: scaleSize(12),
    borderLeftWidth: scaleSize(12),
  },
});

export default styles;
