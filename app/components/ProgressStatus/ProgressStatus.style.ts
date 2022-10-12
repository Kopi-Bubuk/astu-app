import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import {
  scaleHeight,
  scaleWidth,
  scaleFont,
  scaleSize,
} from '../../utils/Scale';
import Layout from '../../utils/Layout';

const styles = (isChecked?: boolean) => StyleSheet.create({
  progress: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: scaleHeight(20),
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(40),
  },
  progressBar: {
    top: scaleHeight(22),
    width: scaleWidth(270),
    height: scaleHeight(7),
    backgroundColor: color.fullBlack,
  },
  progressBarHalf: {
    top: scaleHeight(22),
    width: scaleWidth(135),
    height: scaleHeight(7),
    backgroundColor: color.fullBlack,
  },
  progressBarActive: {
    top: scaleHeight(22),
    width: scaleWidth(270),
    height: scaleHeight(7),
    backgroundColor: color.fullBlack,
  },
  progressBarActiveHalf: {
    top: scaleHeight(22),
    width: scaleWidth(135),
    height: scaleHeight(7),
    backgroundColor: color.fullBlack,
  },
  progressWrapper: {
    width: '100%',
    ...Layout.center,
    flexDirection: 'column',
    backgroundColor: color.black,
  },
  step: {
    ...Layout.center,
  },
  stepNumber: {
    ...Layout.center,
    backgroundColor: color.fullBlack,
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.fullBlack,
    borderRadius: 20,
    marginBottom: scaleHeight(10),
    fontSize: scaleFont(12),
    fontWeight: 'bold',
    color: color.fullBlack,
    overflow: 'hidden',
  },
  stepNumberActive: {
    ...Layout.center,
    alignSelf: 'center',
    backgroundColor: isChecked ? color.mainYellow : color.white,
    color: color.mainBlue,
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: color.fullBlack,
    borderRadius: scaleSize(20),
    marginBottom: scaleHeight(10),
    overflow: 'hidden',
    fontSize: scaleFont(12),
    fontWeight: 'bold',
  },
  stepLabel: {
    fontSize: scaleFont(15),
    color: color.fullBlack,
  },
  stepLabelActive: {
    fontSize: scaleFont(12),
    color: color.mainBlue,
  },
  progressBarWrapper: {
    flexDirection: 'row',
  },
});

export default styles;
