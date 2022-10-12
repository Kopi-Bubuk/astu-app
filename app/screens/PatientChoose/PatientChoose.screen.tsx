import React, {useContext, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// Components
import Container from '../../components/Container/Container.comp';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import Body from '../../components/Body/Body.comp';

// Styling
import styles from './NFTList.style';
import color from '../../utils/Color';

// Helper
import { NavigationHelpers, ParamListBase } from "@react-navigation/core";
import { useFocusEffect } from '@react-navigation/native';
import orderBy from 'lodash/orderBy';
import each from 'lodash/each';

// Mock Data
import { get } from "../../hooks/useApi";
import { windowWidth } from "../../utils/Scale";
import {convertEpochToDate, monthName} from "../../utils/Time";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import DataContext from "../../stores/Provider";

const handleNavigate = (navigation) => () => {
	navigation.navigate('NFTImport');
}

export const PatientChoose: React.FC<{
	navigation: NavigationHelpers<ParamListBase>
}> = ({ navigation }) => {
	const [searchQuery, setQuery] = useState('');
	const [patient, setPatient] = useState<Array<any> | null>([]);
	const { dispatch } = useContext(DataContext);

	useFocusEffect(
		React.useCallback(() => {
			get(`measuree?q=${searchQuery}`).then(result => {
				let ordered = each(result, item => item.id = parseInt(item.id, 10));
				ordered = orderBy(ordered, ['id'], ['desc']);
				setPatient(ordered);
			})
		}, [searchQuery])
	);

	return (
		<Container backgroundColor={color.backgroundGrey}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'Home'}
				title={'Daftar Pasien'}
			/>
			<Body type={'scroll'} scrollEnabled={true} height={'full'}>
				<View style={{
					width: '100%',
					marginBottom: 100
				}}>
					<TextInput
						style={{
							borderWidth: 1,
							borderRadius: 8,
							backgroundColor: color.white,
							borderColor: color.borderGrey,
							margin: 20,
							padding: 12,
							marginTop: 24
						}}
						placeholder={'Cari Pasien'}
						placeholderTextColor={color.grey}
						onChangeText={(queryString) => setQuery(queryString)}
					/>
					<Text style={{
						textAlign: 'center',
						color: color.grey,
						textTransform: 'uppercase',
						marginBottom: 15
					}}>
						{patient?.length} pasien
					</Text>
					{patient && patient.map((item) => {
						if (item.name) {
							return (
								<TouchableOpacity
									onPress={() => {
										dispatch({
											type: 'SET_PATIENT_DATA',
											data: {
												id: item.id,
												name: item.name,
												gender: item.sex ? item.sex : 'Perempuan',
												birth_date: convertEpochToDate(Number(new Date(item.date_of_birth).getTime()) / 1000),
												oodema: item.oodema
											}
										});
										navigation.navigate('MeasureWeightHeight');
									}}
									style={{
										width: '100%',
										padding: 20,
										backgroundColor: 'white',
										marginTop: 1,
										marginHorizontal: 0,
										borderRadius: 7,
										flexDirection: 'row',
										justifyContent: 'space-between'
									}}
								>
									<View>
										<Text style={{
											fontSize: 12,
											textTransform: 'uppercase'
										}}>
											{`${item.name} #${item.id}`}
										</Text>
									</View>
									<FontAwesomeIcon icon={faChevronRight} color={color.grey} size={15} />
								</TouchableOpacity>
							)
						}
					})}
				</View>
			</Body>
		</Container>
	)
};

export default PatientChoose;
