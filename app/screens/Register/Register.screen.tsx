import React, { useContext } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './Register.style';
import color from "../../utils/Color";

// Components
import Container from '../../components/Container/Container.comp';
import CustomStatusBar from "../../components/CustomStatusBar/CustomStatusBar.comp";
import AppHeader from "../../components/AppHeader/AppHeader.comp";
import Body from "../../components/Body/Body.comp";
import Button from "../../components/Button/Button.comp";
import Input from "../../components/Input/Input.comp";

// Image
import DataContext from "../../stores/Provider";

// Helper
import  { post } from "../../hooks/useApi";
import { setLocalValue } from "../../utils/LocalStorage";

const handleRegister = (navigation, patienData, dispatch) => () => {
	dispatch({ type: 'IS_LOADING' });
	const body = {
		username: patienData.measurer_username,
		password: patienData.measurer_password,
		name: patienData.measurer_name,
		email: patienData.measurer_email,
		location: 'Jakarta'
	};

	post('register', { body }).then(result => {
		if (result.status === 'success') {
			post('login', { body }).then(result => {
				setLocalValue('@userProfileName', result.data.name);
				setLocalValue('@userProfileEmail', result.data.email);
				navigation.navigate('Home');
			});
		} else {
			Alert.alert('Pendaftaran gagal, harap coba kembali!');
		}
		dispatch({ type: 'IS_SUCCESS' });
	});
};

const Register = ({ navigation }) => {
	const { patientData, dispatch } = useContext(DataContext);

	return (
		<Container backgroundColor={color.backgroundGrey}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'Landing'}
				title={'Daftar Baru'}
			/>
			<Body type={'scroll'} scrollEnabled={true} align={'flex-start'} height={'full'} backgroundColor={color.backgroundGrey}>
				<View style={{
					width: '100%',
					paddingHorizontal: 20,
					marginTop: 40
				}}>
					<Input label={'Nama'} tag={'measurer_name'} />
					<Input label={'E-mail'} tag={'measurer_email'} />
					<Input label={'User Name'} tag={'measurer_username'} />
					<Input label={'Password'} tag={'measurer_password'} secureTextEntry={true} />
					<Input label={'Konfirmasi Password'} tag={'measurer_password_confirm'} secureTextEntry={true} />
					<Button
						type={'primary'}
						label={'DAFTAR'}
						backgroundColor={'pink'}
						onPress={handleRegister(navigation, patientData, dispatch)}
					/>
					<Text style={{
						width: '100%',
						textAlign: 'center',
						marginTop: 20
					}}>
						Sudah Punya Akun?
					</Text>
					<Button
						type={'secondary'}
						label={'Sign In'}
						navigation={navigation}
						to={'Loader'}
					/>
				</View>
			</Body>
		</Container>
	);
}

export default Register;
