import React, { useContext, useEffect, useRef } from 'react';
import {
	BackHandler,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Platform,
	Alert
} from 'react-native';

// Styling
import styles from './Send.style';

// Components
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import Body from '../../components/Body/Body.comp';

// Helper
import get from 'lodash/get';
import DataContext from '../../stores/Provider';
import { NavigationHelpers, ParamListBase, RouteProp } from '@react-navigation/core';
import { useFocusEffect } from "@react-navigation/native";
import InputSection from "../../components/InputSection/InputSection.comp";
import Input from "../../components/Input/Input.comp";
import {windowWidth} from "../../utils/Scale";
import { post, put } from "../../hooks/useApi";
import { convertDateFormat } from "../../utils/Time";
import moment from 'moment';

import Antropometri from '../../fixtures/antropometri.json';

type SendProps = {
	navigation: NavigationHelpers<ParamListBase>,
	route: RouteProp<any>
}

const calculatePatient = (navigation, dispatch, patientData) => () => {
	dispatch({ type: 'IS_LOADING' });
	const body = {
		name: patientData.name,
		date_of_birth: patientData.birth_date,
		sex: patientData.gender
	};

	const gender = patientData.gender === 'Laki - Laki' ? 'male' : 'female';
	let birthDate = convertDateFormat(patientData.birth_date).toString();
	let currentDate = moment(new Date()).format('YYYY-MM-DD').toString();

	if (Platform.OS === 'ios') {
		currentDate = moment(new Date()).format('MM-DD-YYYY').toString();
		birthDate = birthDate.replaceAll('-', '/');
		currentDate = currentDate.replaceAll('-', '/');
	}

	const roundedAgeMonth = moment(currentDate).diff(birthDate, 'months');

	// weightForAge (BB / U)
	const weightForAgeData = Antropometri.weightForAge[gender][roundedAgeMonth];
	const getWeight = patientData.standing_weight || patientData.recumbent_weight;
	const weightForAge = getWeight - weightForAgeData.Median;
	const weightForAgeScore = weightForAge > 0
		? weightForAge / (weightForAgeData["+1SD"] - weightForAgeData.Median)
		: weightForAge / (weightForAgeData.Median - weightForAgeData["-1SD"]);

	// lengthForAge (TB / U)
	const lengthForAgeData = Antropometri.lengthForAge[gender][roundedAgeMonth];
	const getHeight = patientData.standing_height || patientData.recumbent_height;
	const lengthForAge = getHeight - lengthForAgeData.Median;
	const lengthForAgeScore = lengthForAge > 0
		? lengthForAge / (lengthForAgeData["+1SD"] - lengthForAgeData.Median)
		: lengthForAge / (lengthForAgeData.Median - lengthForAgeData["-1SD"]);

	let formData = {
		...patientData
	};
	formData['weightForAgeScore'] = weightForAgeScore;
	formData['lengthForAgeScore'] = lengthForAgeScore;
	formData['ageMonth'] = roundedAgeMonth;

	dispatch({
		type: 'SET_PATIENT_DATA',
		data: formData
	});

	let measureParams = {
		"date_of_visit": moment(new Date()).format('YYYY-MM-DD').toString(),
		"sex": patientData.gender,
		"date_of_birth": patientData.birth_date,
		"is_approximate_date": patientData.birth_date_type === 'Diketahui',
		"is_unknown_date": patientData.birth_date_type === 'Tidak Diketahui',
		"weight": patientData.standing_weight,
		"height": patientData.standing_height,
		"recumbent_weight": patientData.recumbent_weight,
		"recumbent_height": patientData.recumbent_height,
		"oedema": patientData.oodema,
		"head_circumference": patientData.head,
		"muac": patientData.muac,
		"triceps_skinfold": patientData.triceps,
		"subscapular_skinfold": patientData.subscapular,
		"facility_id": "1",
		"status": "Normal"
	};

	if (patientData.id) {
		measureParams['measuree_id'] = patientData.id;
		post('measurement', { body: measureParams }).then((result) => {
			navigation.navigate('SendInput');
			dispatch({ type: 'IS_SUCCESS' });
		});
	} else {
		post('measuree', { body }).then((result) => {
			measureParams['measuree_id'] = result.data.id;

			post('measurement', { body: measureParams }).then((result) => {
				navigation.navigate('SendInput', { measurementID: result.data.id });
				dispatch({ type: 'IS_SUCCESS' });
			});
		});
	}
}

const Send: React.FC<SendProps> = (
	{ navigation, route }
) => {
	const receiverAddress = get(route, 'params.address', '');
	const addressInputRef = useRef<any>(null);

	const { dispatch, patientData } = useContext(DataContext);

	useEffect(() => {
		if (addressInputRef.current !== null && receiverAddress) {
			addressInputRef.current.setNativeProps({
				text: receiverAddress
			});
			addressInputRef.current.focus();
		}
	}, [receiverAddress]);

	useFocusEffect(
		React.useCallback(() => {
			const onBackPress = () => {
				navigation.navigate('Home');
				return route.name === 'Send';
			};

			BackHandler.addEventListener('hardwareBackPress', onBackPress);
			return () =>
				BackHandler.removeEventListener('hardwareBackPress', onBackPress);
		}, [route]),
	);

	return (
		<SafeAreaView>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'MeasureWeightHeight'}
				title={'Pengukuran Tambahan (Opsional)'}
			/>
			<Body type={'noPadding'} align={'flex-start'} height={'full'}>
				<View style={{
					padding: 20,
					width: '100%'
				}}>
					<InputSection>
						<Input label={'Head Circumference (cm)'} keyboardType={'decimal-pad'} tag={'head'} />
					</InputSection>
					<InputSection>
						<Input label={'MUAC (cm)'} keyboardType={'decimal-pad'} tag={'muac'} />
					</InputSection>
					<InputSection>
						<Input label={'Triceps Skinfold (mm)'} keyboardType={'decimal-pad'} tag={'triceps'} />
					</InputSection>
					<InputSection>
						<Input label={'Subscapular Skinfold (mm)'} keyboardType={'decimal-pad'} tag={'subscapular'} />
					</InputSection>
					<TouchableOpacity style={{
						backgroundColor: 'pink',
						padding: 16,
						width: windowWidth() - 44,
						borderRadius: 12,
						marginTop: 7
					}}
														onPress={calculatePatient(navigation, dispatch, patientData)}
					>
						<Text style={{
							fontSize: 15,
							textAlign: 'center',
							fontWeight: '600'
						}}>
							CEK STATUS STUNTING
						</Text>
					</TouchableOpacity>
				</View>
			</Body>
		</SafeAreaView>
	);
};

export default Send;
