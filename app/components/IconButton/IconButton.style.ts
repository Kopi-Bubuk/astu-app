import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth, scaleFont } from '../../utils/Scale';

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    textAlign: 'center',
    marginRight: scaleWidth(20),
    marginBottom: scaleHeight(20),
  },
  buttonContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gainsboro',
    backgroundColor: 'white',
    width: scaleWidth(60),
    height: scaleHeight(60),
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  icon: {
    flex: 1,
    width: scaleWidth(40),
    height: scaleHeight(40),
    resizeMode: 'contain',
  },
  label: {
    marginTop: scaleHeight(12),
    fontSize: scaleFont(12),
    color: 'black',
    width: scaleWidth(75),
    textAlign: 'center',
  },
});

export default style;
