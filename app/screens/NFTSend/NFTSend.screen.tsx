import React, { useState, useContext } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';

// Styling
import styles from './NFTSend.style';

// Components
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import Body from '../../components/Body/Body.comp';
import Footer from '../../components/Footer/Footer.comp';

import { monthName } from '../../utils/Time';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import color from '../../utils/Color';
import Container from '../../components/Container/Container.comp';
import Input from "../../components/Input/Input.comp";
import {windowWidth} from "../../utils/Scale";
import InputSection from "../../components/InputSection/InputSection.comp";
import CustomRadioOption from "../../components/CustomRadioOption/CustomRadioOption.comp";
import DataContext from "../../stores/Provider";

type RouteProps = {
	params: {
		collection: {
			name: string;
			id: string;
			owner: string;
			description: string;
			url: string;
		};
	}
};

const handleNext = (navigation, patientData, dispatch) => () => {
	if (patientData.name === '') {
		Alert.alert('Harap isi semua data', 'Nama tidak boleh kosong')
	} else {
		navigation.navigate('MeasureWeightHeight');
	}
}

const NFTSendScreen: React.FC<{
	navigation: NavigationHelpers<ParamListBase>,
	route: RouteProps
}> = (
	{ navigation, route }
) => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(new Date());
	const displayDate = `${date.getDate()} ${monthName[date.getMonth()]} ${date.getFullYear()}`;
	const { dispatch, patientData } = useContext(DataContext);

	return (
		<Container backgroundColor={color.backgroundGrey}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'NFTImport'}
				title={'Informasi Pasien'}
			/>
			<Body type={'noPadding'} align={'flex-start'}>
				<View style={{
					width: '100%',
					padding: 20,
					paddingBottom: 5
				}}>
					<InputSection>
						<Input label={'Nama Pasien'} tag={'name'} />
					</InputSection>
					<InputSection title={'Tanggal Lahir'}>
						<CustomRadioOption option={['Diketahui', 'Tidak Diketahui']} tag={'birth_date_type'} />
						{patientData.birth_date_type === 'Diketahui' && <Input
							value={displayDate}
							onTap={() => setOpen(true)}
							placeholder={'Pilih Tanggal'}
							tag={'birth_date'}
						/>}
						<DatePicker
							modal
							mode={'date'}
							open={open}
							date={date}
							onConfirm={(date) => {
								setOpen(false)
								setDate(date)
							}}
							onCancel={() => {
								setOpen(false)
							}}
						/>
					</InputSection>
					<InputSection title={'Jenis Kelamin'}>
						<CustomRadioOption option={['Laki - Laki', 'Perempuan']} tag={'gender'} />
					</InputSection>
				</View>
				<TouchableOpacity style={{
					backgroundColor: 'pink',
					padding: 16,
					width: windowWidth() - 44,
					borderRadius: 12,
					marginTop: 0
				}}
													onPress={handleNext(navigation, patientData, dispatch)}
				>
					<Text style={{
						fontSize: 15,
						textAlign: 'center',
						fontWeight: '600'
					}}>
						LANJUT
					</Text>
				</TouchableOpacity>
			</Body>
			<Footer />
		</Container>
	);
};

export default NFTSendScreen;
