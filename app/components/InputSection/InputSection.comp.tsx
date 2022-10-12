import React from 'react';
import { View, Text } from 'react-native';
import color from "../../utils/Color";

const InputSection = ({ children, title }) => {
	return (
		<View
			style={{
				width: '100%',
				backgroundColor: 'white',
				padding: 20,
				paddingBottom: 3,
				borderRadius: 12,
				marginBottom: 12
			}}
		>
			{title && <View style={{
				borderBottomWidth: 1,
				borderColor: color.borderGrey,
				marginBottom: 12,
				paddingBottom: 12
			}}>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						color: color.grey,
						width: '100%'
					}}
				>
					{title}
				</Text>
			</View>}
			<View>
				{children}
			</View>
		</View>
	);
}

export default InputSection;
