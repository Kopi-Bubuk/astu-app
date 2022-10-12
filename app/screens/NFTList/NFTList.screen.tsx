import React, { useState } from 'react';
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
import { monthName } from "../../utils/Time";

const handleNavigate = (navigation) => () => {
	navigation.navigate('NFTImport');
}

const mappingItem = (item) => {
	if (item === 'Berat Badan Sangat Kurang (Severely Underweight)') {
		return 'Severely Underweight'
	}
	else if (item === 'Sangat Pendek (Severely Stunted)') {
		return 'Severely Stunted'
	} else if (item === ',') {
		return 'Normal'
	} else {
		return item
	}
}

export const NFTListScreen: React.FC<{
	navigation: NavigationHelpers<ParamListBase>
}> = ({ navigation }) => {
	const [searchQuery, setQuery] = useState('');
	const [patient, setPatient] = useState<Array<any> | null>([]);

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
						marginBottom: 7
					}}>
						{patient?.length} pasien
					</Text>
					{patient && patient.map((item) => {
						const lastVisit = item.last_measurement !== null
							? item.last_measurement.date_of_visit
							: '';
						const getMonth = Number(lastVisit.substring(5,7));
						const month = monthName[getMonth - 1];
						const getYear = lastVisit.substring(0,4);
						const getDate = lastVisit.substring(8,10);
						const visitDate = item.last_measurement ? `${getDate} ${month} ${getYear}` : '';
						const status = item.last_measurement ? item.last_measurement.status : '';
						const gender = item.last_measurement && item.last_measurement.sex === 'Laki - Laki' ? 'Laki - Laki' : 'Perempuan';
						const isMultipleStatus = status.includes(",") && status.length > 1;
						let statusArray = isMultipleStatus && status.split(',');
						statusArray = Array.isArray(statusArray) && statusArray.splice(0, 2);

						if (item.name) {
							return (
								<TouchableOpacity
									onPress={() => navigation.navigate('Receive', { patientName: item.name, patientId: item.id })}
									style={{
										width: windowWidth() - 40,
										padding: 20,
										backgroundColor: 'white',
										marginTop: 10,
										marginHorizontal: 20,
										borderRadius: 7,
										flexDirection: 'row',
										justifyContent: 'space-between',
										borderTopWidth: 3,
										borderColor: gender === 'Perempuan' ? 'pink' : color.mainBlue
									}}
								>
									<View>
										<Text style={{
											fontSize: 12,
											marginBottom: 5,
											textTransform: 'uppercase'
										}}>
											{`${item.name} #${item.id}`}
										</Text>
										<Text style={{
											fontSize: 12,
											color: color.grey,
											marginBottom: 5
										}}>
											{gender}
										</Text>
										<Text style={{
											fontSize: 12,
											color: color.grey
										}}>
											{visitDate ? `Pengukuran terakhir: ${visitDate}` : 'Belum diperiksa'}
										</Text>
										{isMultipleStatus
											?
												<View style={{
													flexDirection: 'row'
												}}>
													{statusArray.map(item => item !== 'Berat Badan Normal' && <Text style={item !== 'Normal' ? styles.patientStatusWarning : styles.patientStatus}>
														{mappingItem(item)}
													</Text>)}
												</View>
											: <View style={{
												flexDirection: 'row'
											}}><Text style={status ? styles.patientStatus : styles.patientStatusEmpty}>{status === ',' ? 'Normal' : status}</Text></View>
										}
									</View>
								</TouchableOpacity>
							)
						}
					})}
				</View>
			</Body>
			<TouchableOpacity
				onPress={handleNavigate(navigation)}
				style={{
					backgroundColor: color.mainBlue,
					position: 'absolute',
					bottom: 0,
					right: 0,
					margin: 20,
					borderRadius: 7,
					// shadow props for ios
					shadowColor: '#000',
					shadowOffset: {
						width: 5,
						height: 5,
					},
					shadowOpacity: 0.2,
					shadowRadius: 10,
					// shadow props for android
					elevation: 0.4
			}}>
				<Text style={{
					color: 'white',
					fontSize: 15,
					padding: 12,
					fontWeight: 'bold',
				}}>
					+ Ukur Kondisi Pasien
				</Text>
			</TouchableOpacity>
		</Container>
	)
};

export default NFTListScreen;
