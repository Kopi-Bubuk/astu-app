import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Library
import DataContext from '../../stores/Provider';

// Components
import Body from '../../components/Body/Body.comp';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import Container from '../../components/Container/Container.comp';

// Styling
import styles from './Receive.style';
import { NavigationHelpers, ParamListBase, RouteProp } from "@react-navigation/core";

// Translation
import { useTranslation } from 'react-i18next';
import InputSection from "../../components/InputSection/InputSection.comp";
import {get} from "../../hooks/useApi";
import color from "../../utils/Color";
import CustomRadioOption from "../../components/CustomRadioOption/CustomRadioOption.comp";
import {convertDateMonthName, convertEpochToDate} from "../../utils/Time";

type ReceiveProps = {
	navigation: NavigationHelpers<ParamListBase>,
	route: RouteProp<any>
}

const ResultRow = ({ label, value, type }) => {
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
				textAlign: 'right',
				maxWidth: 220
			}}>
				{value}
			</Text>
		</View>
	);
}

const renderMeasurementZScore = (item) => {
	let status = item.status.split(',');
	status = status.splice(2,4);

	return (
		<View>
			<ResultRow label={'Weight-for-length (BB/TB)'} value={0} />
			<ResultRow label={'Weight-for-age (BB/U)'} value={status[0] || 0} />
			<ResultRow label={'Length-for-age (TB/U)'} value={status[1] || 0} />
			<ResultRow label={'BMI-for-age (IMT/U)'} value={0} />
		</View>
	);
}

const renderMeasurementResult = (item) => {
	let status = item.status.split(',');
	status = status.splice(0,2);

	return (
		<View>
			<ResultRow label={'Oodema'} value={item.oodema || 'Tidak Ada'} />
			<ResultRow label={'Tinggi Badan (cm)'} value={item.height || item.recumbent_height || '-'} />
			<ResultRow label={'Berat Badan (kg)'} value={item.weight || item.recumbent_weight || '-'} />
			<ResultRow label={'Head Circumference (cm)'} value={item.head_circumference || '-'} />
			<ResultRow label={'MUAC (cm)'} value={item.muac || '-'} />
			<ResultRow label={'Triceps Skinfold (mm)'} value={item.triceps_skinfold || '-'} />
			<ResultRow label={'Subscapular Skinfold (mm)'} value={item.subscapular_skinfold || '-'} />
			<View style={{
				flexDirection: 'row',
				marginTop: 10,
				marginBottom: 20,
				flexWrap: 'wrap'
			}}>
				{status[0] && <Text style={styles.statusTag}>{status[0]}</Text>}
				{status[1] && <Text style={styles.statusTag}>{status[1]}</Text>}
			</View>
		</View>
	);
}

const Receive: React.FC<ReceiveProps> = (
	{
		navigation,
		route
	}
) => {
	const [isLoading, setLoading] = useState(true);
  const { dispatch, patientData } = useContext(DataContext);
	const [patientDetail, setpatientDetail] = useState({});
	const patientName = route.params && route.params.patientName;
	const patientId = route.params && route.params.patientId;
  const { t } = useTranslation();
	const screenTitle = `${patientName} #${patientId}`;

	const sorted = patientDetail.measurements && patientDetail.measurements;
	const sortedData = patientDetail.measurements && [...sorted].reverse();

	const patientWeight = !!sortedData && (sortedData[0].weight || sortedData[0].recumbent_weight);
	const patientHeight = !!sortedData && (sortedData[0].height || sortedData[0].recumbent_height);
	const bmi = Number(patientWeight) / ((Number(patientHeight) / 100) * (Number(patientHeight) / 100)) || 0;
	const lastStatus = sortedData && sortedData[0].status.split(',');

	let weightStatus = sortedData && lastStatus[0];
	let heightStatus = sortedData && lastStatus[1];
	let nutritionStatus = 'Gizi Baik';

	const isWeightNormal = weightStatus === '' || weightStatus === 'Berat Badan Normal';
	const isHeightNormal = heightStatus === '' || heightStatus === 'Normal';
	let patientStatus = isWeightNormal && isHeightNormal ? 'Normal' : weightStatus;

	useEffect(() => {
		get(`measuree/${patientId}`).then(result => {
			setpatientDetail(result);
			dispatch({
				type: 'SET_PATIENT_DATA',
				data: {
					id: result.id,
					name: result.name,
					gender: result.sex ? result.sex : 'Perempuan',
					birth_date: convertEpochToDate(Number(new Date(result.date_of_birth).getTime()) / 1000),
					oodema: result.oodema
				}
			});
		});
	}, [patientId]);

  return (
    <Container backgroundColor={color.backgroundGrey}>
      <CustomStatusBar />
      <AppHeader
        navigation={navigation}
        route={'Home'}
        title={screenTitle.toUpperCase()}
				params={{
					screen: 'NFT'
				}}
      />
      <Body type={'scroll'} height={'full'} scrollEnabled={true}>
				<View style={{
					width: '100%',
					padding: 20
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
							{weightStatus !== 'Berat Badan Normal' && weightStatus !== 'Normal' && <Text style={{
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
								heightStatus !== 'Normal' && !!heightStatus && <Text style={{
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
							{patientDetail.name}
						</Text>
						<View>
							<Text style={{
								fontSize: 15,
								marginRight: 7,
								color: 'white',
								marginBottom: 7
							}}>
								{patientDetail.sex} / {convertDateMonthName(patientDetail.date_of_birth)}
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
					{!!patientDetail.measurements && sortedData.map((item, index) => {
						return (
							item === null ?
								<Text>
									Belum Ada Pengukuran
								</Text>
								:
								<InputSection title={`Pengukuran ${convertDateMonthName(item.date_of_visit)}`}>
									<CustomRadioOption option={['Data', 'Z-Score']} tag={`patient_detail_opt_${index}`}/>
									{patientData[`patient_detail_opt_${index}`] === 'Z-Score' ? renderMeasurementZScore(item) : renderMeasurementResult(item)}
							</InputSection>
						)
					})}
				</View>
      </Body>
			<TouchableOpacity
				onPress={() => navigation.navigate('MeasureWeightHeight')}
				style={{
					backgroundColor: color.mainBlue,
					position: 'absolute',
					bottom: 40,
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
  );
};

export default Receive;
