import React, { useState } from 'react';
import { ColorValue, TouchableOpacity } from 'react-native';

// Style & Icon
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

type PressHandlerProps = {
	isSelected: boolean;
	toggleSelected: React.Dispatch<React.SetStateAction<boolean>>;
	handleSelected: Function;
};

const pressHandler = ({
	isSelected,
	toggleSelected,
	handleSelected,
}: PressHandlerProps) => () => {
	toggleSelected(state => !state);
	!isSelected && handleSelected();
};

type ToggleIconProps = {
	key?: React.Key | null | undefined;
	initialSelected?: boolean | undefined;
	iconSelected: string;
	iconUnselected: string;
	colorSelected: number | ColorValue;
	colorUnselected: number | ColorValue;
	size?: number | undefined;
	handleSelected: Function;
};

const ToggleIcon: React.FC<ToggleIconProps> = ({
	key,
	initialSelected,
	iconSelected,
	iconUnselected,
	colorSelected,
	colorUnselected,
	handleSelected,
	size,
}) => {
	const [isSelected, toggleSelected] = useState(initialSelected || false);

	return (
		<TouchableOpacity
			key={key}
			onPress={pressHandler({
				isSelected,
				toggleSelected,
				handleSelected
			})}
		>
			<Icon
				name={isSelected ? iconSelected : iconUnselected}
				color={isSelected ? colorSelected : colorUnselected}
				size={size}
			/>
		</TouchableOpacity>
	);
};

export default ToggleIcon;
