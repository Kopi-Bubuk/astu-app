import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, scaleWidth, scaleFont } from '../../utils/Scale';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: color.borderGrey,
    padding: scaleWidth(20),
    marginBottom: scaleHeight(10),
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: scaleHeight(7),
  },
	desc: {
		fontSize: scaleFont(15)
	},
});

export default styles;
