import { StyleSheet, TextStyle } from 'react-native';
import { scaleFont, scaleHeight } from '../../utils/Scale';
import color from '../../utils/Color';

interface StyleProps {
	title: TextStyle
}

export const styles = (align?: TextStyle['textAlign'], customColor?: string) => StyleSheet.create<StyleProps>({
  title: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    marginBottom: scaleHeight(12),
    textAlign: align ? align : 'left',
    color: customColor ? customColor : color.black,
  }
});

export default styles;
