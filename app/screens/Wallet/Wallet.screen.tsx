import React, {useContext, useEffect, useState} from 'react';
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	RefreshControl,
	BackHandler,
	Image
} from 'react-native';
import styles from './Wallet.style';

// images
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';

// translation
import DataContext from '../../stores/Provider';
import { NavigationHelpers, ParamListBase, RouteProp } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';
import color from "../../utils/Color";
import {get} from "../../hooks/useApi";
import {getLocalValue, setLocalValue} from "../../utils/LocalStorage";

const reloadData = (setBalance: Function, setIDRRates: Function) => () => {
	setBalance(null);
	setIDRRates(null);
}

const renderRefreshControl = (
	refreshing: boolean,
	setBalance: Function,
	setAddress: Function,
	setIDRRates: Function
) => (
	<RefreshControl refreshing={refreshing} onRefresh={reloadData(setBalance, setIDRRates)} />
);

const BoxStats = ({ counter, label, type }) => (
	<View style={type === 'alert' ? styles.boxStatsAlert : styles.boxStats}>
		<Text style={type === 'alert' ? styles.boxStatsCounterAlert : styles.boxStatsCounter}>
			{counter}
		</Text>
		<Text style={type === 'alert' ? styles.boxStatsLabelAlert : styles.boxStatsLabel}>
			{label}
		</Text>
	</View>
);

const Wallet: React.FC<{
	navigation: NavigationHelpers<ParamListBase>,
	route: RouteProp<any>
}> = ({
				navigation,
				route
			}) => {
	const [searchQuery, setQuery] = useState('');
	const [patient, setPatient] = useState<Array<any> | null>([]);
	const [userName, setUserName] = useState('');
	const [refreshing] = useState(false);
	const { dispatch } = useContext(DataContext);

	useFocusEffect(
		React.useCallback(() => {
			get(`measuree?q=${searchQuery}`).then(result => {
				setPatient(result);
			})
		}, [searchQuery])
	);

	useEffect(() => {
		getLocalValue('@userProfileName').then(result => {
			result && setUserName(result);
		});
	}, [userName]);

	return (
		<SafeAreaView>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				title={'ASTU'}
				isHasProfile={true}
				dispatch={dispatch}
			/>
			<ScrollView
				contentContainerStyle={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.body}>
					<Text style={styles.greeting}>
						Hello!
					</Text>
					<Text style={styles.greetingName}>
						{userName}
					</Text>
					<TouchableOpacity style={styles.buttonMeasure} onPress={() => navigation.navigate('NFTImport')}>
						<Text style={{
							fontSize: 21,
							marginBottom: 5
						}}>
							Kamu telah mengukur
						</Text>
						<Text style={{
							fontSize: 24,
							color: color.black,
							fontWeight: 'bold'
						}}>
							{patient.length} Pasien
						</Text>
						<Text style={styles.buttonMeasureText}>
							Mulai Pengukuran
						</Text>
					</TouchableOpacity>
					<View style={{
						// backgroundColor: 'white',
						// padding: 20,
						borderRadius: 12,
						marginVertical: 12
					}}>
						<Image
							style={{
								width: '100%',
								height: 210,
								borderRadius: 12
							}}
							source={{ uri: 'https://promkes.kemkes.go.id/imagex/content/2712f6033_Upaya_Penting_Kemenkes_Dalam_Menurunkan_Stunting_FI.jpg'}}
						/>
					</View>
					<View>
						<Text style={styles.statusPatient}>
							Status Pasien
						</Text>
						<View style={{
							flexDirection: 'row'
						}}>
							<BoxStats counter={18} label={'Normal'}/>
							<BoxStats counter={2} label={'Severely Stunted'} type={'alert'} />
							<BoxStats counter={1} label={'Gizi Buruk'}/>
						</View>
						<View style={{
							flexDirection: 'row'
						}}>
							<BoxStats counter={5} label={'Under Weight'}/>
							<BoxStats counter={4} label={'Stunted'} type={'alert'} />
							<BoxStats counter={5} label={'Obese'}/>
						</View>
					</View>
					<TouchableOpacity style={styles.buttonSeePatient} onPress={() => navigation.navigate('Home', { screen: 'NFT' })}>
						<Text style={styles.buttonSeePatientText}>
							Lihat Data Pasien
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Wallet;
