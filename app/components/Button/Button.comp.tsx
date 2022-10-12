import React from 'react';
import { Image, Text, View, TouchableOpacity as BottomSheetBottom  } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

// Styling
import styles from './Button.style';
import color from '../../utils/Color';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Config
import { navigationProps, ButtonProps } from './Button.config';
import { testID } from '../../utils/Native';

// Images
const helpIcon = require('../../assets/img/help-icon.png');

const handleNavigation = (
  navigation: navigationProps,
  to: string | undefined,
) => {
  navigation.navigate(to);
};

const onPressHandler =
  (
    navigation: navigationProps | undefined,
    to: string | undefined,
    onPress?: Function,
  ) =>
  () => {
    if (navigation) {
      handleNavigation(navigation, to);
    } else {
      onPress ? onPress() : null;
    }
  };

export const Button: React.FC<ButtonProps> = ({
  type,
  inverse,
  onPress,
  label,
  size,
  icon,
  navigation,
  to,
  disabled,
	backgroundColor,
	isBottomSheetButton,
	testId,
}) => (
	isBottomSheetButton ?
		<BottomSheetBottom
			disabled={disabled}
			onPress={onPressHandler(navigation, to, onPress)}
			style={
				inverse ? styles('', size, false).buttonInverse : styles(type, size, disabled, backgroundColor).button
			}
		>
			{!!icon && (
				icon === 'help' ?
					<Image source={helpIcon} style={styles().helpIcon} /> :
					<View style={styles().iconWrapper}>
						<FontAwesomeIcon
							icon={icon === 'faArrowUp' ? faArrowUp : faArrowDown}
							color={color.black}
							size={18}
						/>
					</View>
			)}
			<Text style={inverse ? styles().buttonLabelInverse : styles(type).buttonLabel}>
				{label}
			</Text>
		</BottomSheetBottom>
		: <TouchableOpacity
				disabled={disabled}
				onPress={onPressHandler(navigation, to, onPress)}
				style={
					inverse ? styles('', size, false).buttonInverse : styles(type, size, disabled, backgroundColor).button
				}
				{...(typeof(testId) !== 'undefined' ? testID(testId) : {})}
			>
    {!!icon && (
			icon === 'help' ?
				<Image source={helpIcon} style={styles().helpIcon} /> :
				<View style={styles().iconWrapper}>
					<FontAwesomeIcon
						icon={icon === 'faArrowUp' ? faArrowUp : faArrowDown}
						color={color.black}
						size={18}
					/>
				</View>
    )}
    <Text style={inverse ? styles().buttonLabelInverse : styles(type).buttonLabel}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default Button;
