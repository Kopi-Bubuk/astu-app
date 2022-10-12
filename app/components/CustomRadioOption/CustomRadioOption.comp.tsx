import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import color from "../../utils/Color";
import DataContext from "../../stores/Provider";
import {windowWidth} from "../../utils/Scale";

const onPressHandler = (setActiveIndex, index, item, tag, dispatch, patientData) => {
	let formData = {
		...patientData
	};
	formData[tag] = item;

	tag && dispatch({
		type: 'SET_PATIENT_DATA',
		data: formData
	});

	setActiveIndex(index);
};

const OptionItem = (
	{ setActiveIndex, activeIndex, item, index, tag, dispatch, patientData }
) => (
	<TouchableOpacity
		onPress={() => onPressHandler(setActiveIndex, index, item, tag, dispatch, patientData)}
		style={{
			backgroundColor: activeIndex === index ? 'pink' : color.backgroundGrey,
			padding: 10.5,
			width: (windowWidth() / 2) - 46,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 40,
			marginHorizontal: 5
		}}>
		<Text style={{
			fontSize: 13.5,
			color: activeIndex === index ? color.black : color.black,
		}}>
			{item}
		</Text>
	</TouchableOpacity>
);

const CustomRadioOption = ({ option, tag }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { dispatch, patientData } = useContext(DataContext);

	return (
		<View style={{
			flexDirection: 'row',
			paddingBottom: 15,
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			{option.map((item, index) => {
				return (
					<OptionItem
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
						item={item}
						index={index}
						tag={tag}
						dispatch={dispatch}
						patientData={patientData}
					/>
				)
			})}
		</View>
	);
};

export default CustomRadioOption;
