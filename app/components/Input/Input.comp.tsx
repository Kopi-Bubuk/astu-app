import React, {useRef, RefObject, useContext, useEffect, useState} from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

// Styling
import color from '../../utils/Color';
import styles from './Input.style';

// Icon
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';
import DataContext from "../../stores/Provider";
const Icon = createIconSetFromFontello(fontelloConfig);

type InputProps = {
	label?: string;
	isHasClearButton?: boolean;
	value?: any;
};

const clearInput = (inputRef: RefObject<any>) => (): void => {
	inputRef.current.setNativeProps({ text: '' });
};

const saveValue = (dispatch, label, tag, patientData) => (data) => {
	let formData = {
		...patientData
	};
	formData[tag] = data;

	tag && dispatch({
		type: 'SET_PATIENT_DATA',
		data: formData
	});
}

const Input: React.FC<InputProps> = (
	{
		label ,
		isHasClearButton,
		value,
		onTap,
		placeholder,
		keyboardType,
		tag,
		secureTextEntry
	}
) => {
	const inputRef = useRef(null);
	const { dispatch, patientData } = useContext(DataContext);
	const [updatedValue, setValue] = useState('');

	useEffect(() => {
		setValue(value);
		inputRef.current && inputRef.current.setNativeProps({ text: value ? value.toString() : ''});
		let formData = {
			...patientData
		};
		formData[tag] = value;

		tag && dispatch({
			type: 'SET_PATIENT_DATA',
			data: formData
		});
	}, [value]);

	return (
		<View style={styles.input}>
			{label && <Text style={styles.label}>{label}</Text>}
			<TextInput
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType ? keyboardType : 'default'}
				placeholder={placeholder ? placeholder : ''}
				placeholderTextColor={color.black}
				onTouchStart={onTap}
				style={styles.inputBar}
				ref={inputRef}
				value={updatedValue}
				onChangeText={saveValue(dispatch, label, tag, patientData)}
			/>
			{isHasClearButton &&
				<TouchableOpacity style={styles.closeButton} onPress={clearInput(inputRef)}>
					<Icon name={'close'} size={21} color={color.grey} />
				</TouchableOpacity>
			}
		</View>
	);
}

export default Input;
