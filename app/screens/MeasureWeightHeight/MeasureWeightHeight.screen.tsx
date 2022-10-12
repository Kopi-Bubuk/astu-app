import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from 'react-native';

// Components
import Body from '../../components/Body/Body.comp';
import Container from '../../components/Container/Container.comp';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';

// Navigation & Data
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import DataContext from '../../stores/Provider';

// Style
import color from '../../utils/Color';
import styles from './MeasureWeightHeight.style';

// Translation
import Input from "../../components/Input/Input.comp";
import InputSection from "../../components/InputSection/InputSection.comp";
import CustomRadioOption from "../../components/CustomRadioOption/CustomRadioOption.comp";
import { windowWidth } from "../../utils/Scale";

type CollectionProps = {
		collection: {
			name: string;
			id: string;
			owner: string;
			description: string;
			url: string;
		}
};

interface MeasureWeightHeightProps {
	navigation: NavigationHelpers<ParamListBase>;
	route: {
		params: CollectionProps
	};
}

const MeasureWeightHeight: React.FC<MeasureWeightHeightProps> = (
	{ route, navigation }
) => {
	const { patientData } = useContext(DataContext);

	return (
		<Container backgroundColor={color.backgroundGrey}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'NFTSend'}
				title={'Berat & Tinggi'}
			/>
			<Body
				align={'flex-start'}
				type={'scroll'}
				isFocus={true}
				scrollEnabled={true}
				backgroundColor={color.backgroundGrey}>
				<View style={{
					backgroundColor: color.borderGrey,
					width: '100%',
					padding: 20,
				}}>
					<Text>
						{patientData.name && patientData.name.toUpperCase()}
					</Text>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center'
					}}>
						<Text>
							{patientData.gender}
						</Text>
						<View
							style={{
								backgroundColor: color.black,
								width: 5,
								height: 5,
								borderRadius: 5,
								marginHorizontal: 7
							}}
						/>
						<Text>
							{`${patientData.birth_date}`}
						</Text>
					</View>
				</View>
				<View style={{
					padding: 20,
					width: '100%'
				}}>
					<InputSection title={'Oodema'}>
						<CustomRadioOption option={['Tidak Ada', 'Ya']} tag={'oodema'} />
					</InputSection>
					<InputSection title={'Berat & Tinggi'}>
						<CustomRadioOption option={['Berdiri', 'Duduk']} tag={'measure_type'} />
							<Input label={'Tinggi (cm)'} keyboardType={'decimal-pad'} tag={
								patientData.measure_type === 'Berdiri' ? 'standing_height' : 'recumbent_height'
							} />
							<Input label={'Berat (kg)'} keyboardType={'decimal-pad'} tag={
								patientData.measure_type === 'Berdiri' ? 'standing_weight' : 'recumbent_weight'
							} />
					</InputSection>
					<TouchableOpacity style={{
						backgroundColor: 'pink',
						padding: 16,
						width: windowWidth() - 40,
						borderRadius: 12,
						marginTop: 7
					}}
														onPress={() => navigation.navigate('Send')}
					>
						<Text style={{
							fontSize: 15,
							textAlign: 'center',
							fontWeight: '600'
						}}>
							LANJUT
						</Text>
					</TouchableOpacity>
				</View>
			</Body>
		</Container>
	);
}

export default MeasureWeightHeight;
