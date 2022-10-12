import { StyleSheet } from 'react-native';
import { scaleFont, scaleWidth } from '../../utils/Scale';

export const styles = StyleSheet.create({
  button: {
    width: '33.33%',
    padding: scaleWidth(21),
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: scaleFont(32),
  },
});

export default styles;
