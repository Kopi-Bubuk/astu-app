import React, { useContext, useState, useEffect } from 'react';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import {View, TouchableOpacity, Text, BackHandler} from 'react-native';

// Styling
import styles from './NFTImport.style';
import color from '../../utils/Color';

// Components
import Container from "../../components/Container/Container.comp";
import CustomStatusBar from "../../components/CustomStatusBar/CustomStatusBar.comp";
import AppHeader from "../../components/AppHeader/AppHeader.comp";
import Body from "../../components/Body/Body.comp";
import Footer from "../../components/Footer/Footer.comp";

// Helper
import { useTranslation } from "react-i18next";
import DataContext from "../../stores/Provider";
import {windowWidth} from "../../utils/Scale";
import initialState from "../../initialState";
import {useFocusEffect} from "@react-navigation/native";

const PatientOpt = ({ title, subTitle, isActive, setActiveIndex, activeIndex }) => (
	<TouchableOpacity style={styles(isActive).option}
		onPress={() => setActiveIndex(activeIndex)}
	>
		<View style={styles(isActive).optionIndicator}/>
		<View>
			<Text style={styles().optionTitle}>
				{title}
			</Text>
			<Text style={styles().optionSubtitle}>
				{subTitle}
			</Text>
		</View>
	</TouchableOpacity>
);

export const NFTImport: React.FC<{
	navigation: NavigationHelpers<ParamListBase>
}> = ({ navigation }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { dispatch } = useContext(DataContext);

	useFocusEffect(
		React.useCallback(() => {
			dispatch({
				type: 'SET_PATIENT_DATA',
				data: initialState.patientData
			});
		}, []),
	);

	return (
		<Container backgroundColor={color.backgroundGrey}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'Home'}
				title={'Status Pasien'}
				params={{
					screen: 'NFT'
				}}
			/>
			<Body type={'noPadding'} align={'flex-start'} height={'full'}>
				<Text style={styles().title}>
					Pilih status pasien yang ingin diukur
				</Text>
				<PatientOpt
					title={'Pasien Baru'}
					subTitle={'Pasien yang belum terdaftar'}
					isActive={activeIndex === 0}
					setActiveIndex={setActiveIndex}
					activeIndex={0}
				/>
				<PatientOpt
					title={'Pasien Lama'}
					subTitle={'Pasien yang sudah terdaftar'}
					isActive={activeIndex === 1}
					setActiveIndex={setActiveIndex}
					activeIndex={1}
				/>
				<TouchableOpacity style={{
					backgroundColor: 'pink',
					padding: 16,
					width: windowWidth() - 44,
					borderRadius: 12,
					marginTop: 7
				}}
					onPress={() => navigation.navigate(activeIndex === 0 ? 'NFTSend' : 'PatientChoose')}
				>
					<Text style={{
						fontSize: 15,
						textAlign: 'center',
						fontWeight: '600'
					}}>
						MULAI UKUR PASIEN
					</Text>
				</TouchableOpacity>
			</Body>
			<Footer />
		</Container>
	);
}

export default NFTImport;
