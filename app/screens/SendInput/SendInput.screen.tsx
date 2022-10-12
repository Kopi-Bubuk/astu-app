import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Components
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import Body from '../../components/Body/Body.comp';
import Footer from '../../components/Footer/Footer.comp';

// Styling
import styles from './SendInput.style';
import color from '../../utils/Color';

// Translation
import { NavigationHelpers, ParamListBase, RouteProp } from "@react-navigation/core";

// Data
import DataContext from '../../stores/Provider';
import InputSection from "../../components/InputSection/InputSection.comp";
import { windowWidth } from "../../utils/Scale";
import {put} from "../../hooks/useApi";

type SendInputProps = {
	navigation: NavigationHelpers<ParamListBase>,
	route: RouteProp<any>
};

const ResultRow = ({
	label, value, type, setPatientStatus, setWeightStatus, setHeightStatus, setNutritionStatus
}) => {
	let status = '';

	if (type === 'berat') {
		if (value < -3) {
			status = 'Berat Badan Sangat Kurang (Severely Underweight)'
		} else if (value >= -3 && value < -2) {
			status = 'Berat Badan Kurang (Underweight)'
		} else if (value >= -2 && value <= 1) {
			status = 'Berat Badan Normal'
		} else if (value > 1) {
			status = 'Risiko Berat Badan Lebih'
		}

		setWeightStatus(status);
	}

	if (type === 'tinggi') {
		if (value < -3) {
			status = 'Sangat Pendek (Severely Stunted)'
		} else if (value >= -3 && value < -2) {
			status = 'Pendek (Stunted)'
		} else if (value >= -2 && value <= 2) {
			status = 'Normal'
		} else if (value > 2) {
			status = 'Tinggi'
		}

		setHeightStatus(status);
	}

	if (type === 'gizi') {
		if (value < -3) {
			status = 'Gizi Buruk (Severely Wasted)'
		} else if (value >= -3 && value < -2) {
			status = 'Gizi Kurang (Wasted)'
		} else if (value >= -2 && value <= 1) {
			status = 'Gizi Baik'
		} else if (value > 1 && value <= 2) {
			status = 'Berisiko Gizi Lebih (Possible Risk of Overweight)'
		} else if (value > 2 && value <= 3) {
			status = 'Gizi Lebih (Overweight)'
		} else if (value > 3) {
			status = 'Obesitas (Obese)'
		}

		setNutritionStatus(status);
	}

	if (status !== 'Normal' && status !== 'Berat Badan Normal' && status !== 'Gizi Baik') {
		setPatientStatus && setPatientStatus(status);
	}

	return (
		<View style={{
			flexDirection: 'row',
			marginBottom: 10,
			justifyContent: 'space-between'
		}}>
			<View style={{
				flexDirection: 'row'
			}}>
				<Text>
					{label}
				</Text>
			</View>
			<Text style={{
				fontWeight: 'bold',
				color: !!status && status !== 'Normal' && status !== 'Berat Badan Normal' && status !== 'Gizi Baik' ? color.red : color.black
			}}>
				{value}
			</Text>
		</View>
	);
}

const SendInput: React.FC<SendInputProps> = ({ navigation, route }) => {
	const [patientStatus, setPatientStatus] = useState('Normal');
	const [weightStatus, setWeightStatus] = useState('');
	const [heightStatus, setHeightStatus] = useState('');
	const [nutritionStatus, setNutritionStatus] = useState('');

	const { patientData } = useContext(DataContext);
	const patientHeight = patientData.standing_height || patientData.recumbent_height;
	const patientWeight = patientData.standing_weight || patientData.recumbent_weight;
	const bmi = patientWeight / ((patientHeight / 100) * (patientHeight / 100));

	useEffect(() => {
		const weightForAgeScore = patientData && patientData.weightForAgeScore.toFixed(2) || 0;
		const lengthForAgeScore = patientData && patientData.lengthForAgeScore.toFixed(2) || 0;

		route.params && route.params.measurementID && put(`measurement/${route.params.measurementID}`, { body: {
				status: `${weightStatus},${heightStatus},${weightForAgeScore},${lengthForAgeScore}`
			}})
	}, [patientStatus]);

  return (
    <SafeAreaView style={styles().container}>
      <CustomStatusBar />
      <AppHeader title={'Hasil Pengukuran'} />
			<Body
				type={'scroll'}
				scrollEnabled={true}
				backgroundColor={color.backgroundGrey}
				align={'flex-start'}
				height={'full'}
			>
				<View style={{
					padding: 20,
					width: '100%'
				}}>
					<View style={{
						backgroundColor: patientStatus === 'Normal' ? color.green : color.red,
						borderRadius: 12,
						marginBottom: 12,
						padding: 20
					}}>
						<Text style={{
							color: color.white,
							fontSize: 24,
							marginBottom: 5,
							fontWeight: 'bold'
						}}>
							{patientStatus === 'Normal' ? 'Normal' : 'Kondisi :'}
						</Text>
						<View style={{
							flexDirection: 'row',
							flexWrap: 'wrap'
						}}>
							{weightStatus !== 'Berat Badan Normal' && <Text style={{
								backgroundColor: 'white',
								color: color.red,
								padding: 5,
								paddingHorizontal: 12,
								borderRadius: 5,
								overflow: 'hidden',
								fontSize: 15,
								marginRight: 7,
								marginBottom: 7
							}}>
								{weightStatus}
							</Text>
							}
							{
								heightStatus !== 'Normal' && <Text style={{
									backgroundColor: 'white',
									color: color.red,
									padding: 5,
									paddingHorizontal: 12,
									borderRadius: 5,
									overflow: 'hidden',
									fontSize: 15,
									marginRight: 7,
									marginBottom: 7
								}}>
									{heightStatus}
								</Text>
							}
							{nutritionStatus !== 'Gizi Baik'
								&& <Text style={{
									backgroundColor: 'white',
									color: color.red,
									padding: 5,
									paddingHorizontal: 12,
									borderRadius: 5,
									overflow: 'hidden',
									fontSize: 15,
									marginRight: 7,
									marginBottom: 7
								}}>
									{nutritionStatus}
								</Text>
							}
						</View>
						<Text style={{
							fontSize: 18,
							color: color.white,
							marginBottom: 7
						}}>
							{patientData.name}
						</Text>
						<View>
							<Text style={{
								fontSize: 15,
								marginRight: 7,
								color: 'white',
								marginBottom: 7
							}}>
								{patientData.gender} / {patientData.birth_date_type === 'Tidak Diketahui' ? patientData.birth_date_type : `${patientData.birth_date} (${patientData.ageMonth} Bulan)`}
							</Text>
							<Text style={{
								fontSize: 15,
								marginRight: 7,
								color: 'white'
							}}>
								{patientWeight} kg / {patientHeight} cm / BMI : {bmi.toFixed(1)}
							</Text>
						</View>
					</View>
					<InputSection title={'Data Tambahan'}>
						<ResultRow label={'Head Circumference (cm)'} value={patientData.head || '-'}/>
						<ResultRow label={'MUAC (cm)'} value={patientData.muac || '-'}/>
						<ResultRow label={'Triceps Skinfold (mm)'} value={patientData.triceps || '-'}/>
						<ResultRow label={'Subscapular Skinfold (mm)'} value={patientData.subscapular || '-'}/>
					</InputSection>
					<InputSection title={'WHO Z-Score'}>
						<ResultRow setPatientStatus={setPatientStatus} setNutritionStatus={setNutritionStatus} label={'Weight-for-length (BB/TB)'} type={'gizi'} value={0}/>
						<ResultRow setPatientStatus={setPatientStatus} setWeightStatus={setWeightStatus} label={'Weight-for-age (BB/U)'} type={'berat'} value={patientData.weightForAgeScore.toFixed(2) || 0}/>
						<ResultRow setPatientStatus={setPatientStatus} setHeightStatus={setHeightStatus} label={'Length-for-age (TB/U)'} type={'tinggi'} value={patientData.lengthForAgeScore.toFixed(2) || 0}/>
						<ResultRow setPatientStatus={setPatientStatus} setNutritionStatus={setNutritionStatus} label={'BMI-for-age (IMT/U)'} type={'gizi'} value={0}/>
						{/*<ResultRow label={'HC-for-age'} value={1.24}/>*/}
						{/*<ResultRow label={'MUAC-for-age'} value={0.20}/>*/}
						{/*<ResultRow label={'TSF-for-age'} value={1.61}/>*/}
						{/*<ResultRow label={'SSF-for-age'} value={0.68}/>*/}
					</InputSection>
					<TouchableOpacity style={{
						backgroundColor: 'pink',
						padding: 16,
						width: windowWidth() - 44,
						borderRadius: 12,
						marginTop: 7
					}}
						onPress={() => {
							navigation.navigate('NFTImport');
						}}
					>
						<Text style={{
							fontSize: 15,
							textAlign: 'center',
							fontWeight: '600'
						}}>
							UKUR PASIEN LAIN
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{
						borderWidth: 1,
						borderColor: 'pink',
						backgroundColor: 'white',
						padding: 16,
						width: windowWidth() - 44,
						borderRadius: 12,
						marginTop: 12
					}}
						onPress={() => {
							navigation.navigate('Home', { screen: 'NFT', isRefresh: true });
						}}
					>
						<Text style={{
							fontSize: 15,
							textAlign: 'center',
							fontWeight: '600'
						}}>
							KEMBALI KE HOME
						</Text>
					</TouchableOpacity>
				</View>
			</Body>
    </SafeAreaView>
  );
};

export default SendInput;
