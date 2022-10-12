import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleWidth, scaleFont } from '../../utils/Scale';

const styles = (backgroundColor?: string) => StyleSheet.create({
  back: {
    color: color.white,
  },
  backButton: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    paddingHorizontal: scaleWidth(12),
  },
  backButtonLabel: {
    color: color.white,
    fontSize: scaleFont(15),
    marginLeft: scaleWidth(7),
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: backgroundColor ? backgroundColor : 'pink',
    maxWidth: '100%',
    paddingVertical: scaleHeight(12),
    paddingTop: scaleHeight(21),
    justifyContent: 'space-between',
    height: scaleHeight(60),
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: scaleHeight(20),
  },
  title: {
    fontSize: scaleFont(13.5),
    fontWeight: 'bold',
    color: 'black',
  },
  headerContent: {
    flexDirection: 'row',
  },
  leftBar: {
    width: scaleWidth(52),
  },
  rightBar: {
		position: 'relative',
		top: scaleHeight(-7),
    width: scaleWidth(52)
  },
  scanIcon: {
    width: scaleWidth(20),
    height: scaleHeight(20),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default styles;
