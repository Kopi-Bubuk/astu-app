import { StyleSheet } from 'react-native';
import {
  scaleFont,
  scaleHeight,
  scaleWidth,
  scaleSize,
} from '../../utils/Scale';
import color from '../../utils/Color';

const styles = (isCurrencySwitched?: boolean, isFocus?: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundGrey,
  },
  input: {
    width: '100%',
    marginTop: scaleHeight(12),
    paddingHorizontal: scaleWidth(20),
  },
  inputBox: {
    width: '100%',
    fontSize: scaleFont(32),
    paddingBottom: scaleHeight(7),
    color: color.black,
  },
  inputLabel: {
    fontWeight: '600',
    fontSize: scaleFont(13.5),
    color: color.orange,
  },
  inputLabelError: {
    fontWeight: '600',
    fontSize: scaleFont(13.5),
    color: color.red,
  },
  inputRow: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: color.orange,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  inputRowError: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: color.red,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  inputButton: {
    width: scaleWidth(120),
    paddingLeft: scaleWidth(12),
  },
  inputButtonLabel: {
    color: color.mainBlue,
    fontSize: scaleFont(12),
  },
  switchIcon: {
    width: scaleWidth(20),
    height: scaleHeight(20),
    resizeMode: 'contain',
  },
  switchButton: {
    marginVertical: scaleHeight(20),
    borderColor: color.black,
    borderWidth: 1,
    borderStyle: 'solid',
    width: scaleSize(42),
    height: scaleSize(42),
    borderRadius: scaleWidth(42),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  conversion: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  currency: {
    color: color.grey,
    fontSize: scaleFont(15),
    marginBottom: scaleHeight(5),
  },
  currencyAmount: {
    color: color.grey,
    fontSize: scaleFont(15),
    marginBottom: scaleHeight(20),
  },
  buttonNext: {
    width: '100%',
    marginBottom: 0,
  },
  infoMessage: {
    width: '100%',
    color: color.grey,
    marginTop: scaleHeight(7),
    paddingLeft: scaleWidth(20),
    fontSize: scaleFont(13.5),
  },
  errorMessage: {
    width: '100%',
    color: color.red,
    marginTop: scaleHeight(7),
    paddingLeft: scaleWidth(20),
    fontSize: scaleFont(13.5),
  },
  emptyMessage: {
    height: scaleHeight(30),
  },
  IDRCurrency: {
    width: scaleWidth(50),
    fontSize: scaleFont(32),
    color: color.black,
    marginBottom: scaleHeight(7),
  },
  bodyContent: {
    width: '100%',
  },
  keyboardAvoidingView: {
    flex: 1,
    height: '100%',
    justifyContent: isFocus ? 'flex-start' : 'space-between',
  },
});

export default styles;
