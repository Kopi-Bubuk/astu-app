import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import { scaleFont, scaleHeight, scaleWidth } from '../../utils/Scale';

const getButtonStyleByType = (type?: string, disabled?: boolean) => {
  if (type === 'primary' && !disabled) {
    return color.white;
  }
  if (type === 'secondary') {
    return 'transparent';
  }
  if (disabled) {
    return color.borderGrey;
  }
  return color.white;
};

const getButtonBorder = (type?: string, disabled?: boolean) => {
  if (type === 'primary' && !disabled) {
    return 'pink';
  }
	if (type === 'secondary') {
		return 'transparent';
	}
  if (disabled) {
    return color.borderGrey;
  }
  return color.black;
};

const getWidth = (size) => {
	if (size === 'auto') {
		return;
	} else if (size === 'half') {
		return '50%';
	} else {
		return '100%';
	}
};

const styles = (type?: string, size?: string, disabled?: boolean, backgroundColor?: string) => StyleSheet.create({
  button: {
    minWidth: getWidth(size),
    backgroundColor: backgroundColor ? backgroundColor : getButtonStyleByType(type, disabled),
    paddingVertical: scaleHeight(16),
		paddingHorizontal: scaleWidth(20),
    borderRadius: 10,
    marginBottom: scaleHeight(12),
    marginHorizontal: size === 'half' ? scaleWidth(5) : 0,
    flexDirection: 'row',
		alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: getButtonBorder(type, disabled),
  },
  buttonInverse: {
    width: size === 'half' ? '50%' : '100%',
    backgroundColor: 'transparent',
    borderColor: color.white,
    borderWidth: 0,
    borderStyle: 'solid',
    paddingVertical: scaleHeight(16),
    borderRadius: 10,
    marginBottom: scaleHeight(16),
  },
  buttonLabel: {
    textAlign: 'center',
    color: type === 'secondary' ? color.black : color.black,
    fontSize: scaleFont(13.5),
    fontWeight: 'bold',
  },
  buttonLabelInverse: {
    textAlign: 'center',
    color: color.white,
    fontSize: scaleFont(13.5),
    fontWeight: 'bold',
  },
  iconWrapper: {
    marginRight: scaleWidth(12),
  },
	helpIcon: {
		resizeMode: 'contain',
		width: scaleWidth(24),
		height: scaleHeight(24),
		marginRight: scaleWidth(7)
	}
});

export default styles;
