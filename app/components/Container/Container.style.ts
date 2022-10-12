import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleHeight, windowHeight } from "../../utils/Scale";

const styles = (backgroundColor?: string, isWebView?: boolean) =>
  StyleSheet.create({
    container: {
      height: isWebView ? windowHeight() + scaleHeight(40) : '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: backgroundColor ? backgroundColor : color.white,
    },
  });

export default styles;
