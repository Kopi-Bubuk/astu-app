import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleFont, scaleHeight, scaleWidth } from '../../utils/Scale';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: color.backgroundGrey,
    paddingVertical: scaleHeight(10),
    borderRadius: 20,
    marginBottom: scaleHeight(16),
    width: scaleWidth(150),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonLabel: {
    fontWeight: '600',
    fontSize: scaleFont(16),
    color: color.black,
  },
  icon: {
    marginRight: scaleWidth(7),
  },
  infoIcon: {
    width: scaleWidth(20),
    height: scaleHeight(20),
    marginRight: scaleWidth(7),
    resizeMode: 'contain',
  },
});

export default styles;
