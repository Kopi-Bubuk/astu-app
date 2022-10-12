import React, {useContext} from 'react';
import { View, Text, Image, Alert } from 'react-native';
import styles from './Loader.style';
import color from "../../utils/Color";

// Components
import Container from '../../components/Container/Container.comp';
import CustomStatusBar from "../../components/CustomStatusBar/CustomStatusBar.comp";
import AppHeader from "../../components/AppHeader/AppHeader.comp";
import Body from "../../components/Body/Body.comp";
import Button from "../../components/Button/Button.comp";
import Input from "../../components/Input/Input.comp";
import Footer from "../../components/Footer/Footer.comp";

// Image
import Logo from '../../assets/img/logo-astu.png';
import DataContext from "../../stores/Provider";

// Helper
import  {post } from "../../hooks/useApi";
import {removeLocalValue, setLocalValue} from "../../utils/LocalStorage";

const handleLogin = (navigation, patienData, dispatch) => () => {
	dispatch({ type: 'IS_LOADING' });
	const body = {
		username: patienData.measurer_username,
		password: patienData.measurer_password
	};

	post('login', { body }).then(result => {
		if (result.status === 'success') {
			setLocalValue('@userProfileName', result.data.name);
			setLocalValue('@userProfileEmail', result.data.email);
			navigation.navigate('Home');
		} else {
			Alert.alert('Username dan password tidak sesuai!');
		}
		dispatch({ type: 'IS_SUCCESS' });
	});
};

const Loader = ({ navigation }) => {
	const { patientData, dispatch } = useContext(DataContext);

	return (
		<Container backgroundColor={color.backgroundGrey}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'Landing'}
				title={'Sign In'}
			/>
			<Body align={'flex-start'} type={'noPadding'} height={'full'} backgroundColor={color.backgroundGrey}>
				<View style={{
					width: '100%',
					paddingHorizontal: 20
				}}>
					<Image source={Logo} style={{
						width: 140,
						height: 140,
						borderRadius: 140 / 3,
						alignSelf: 'center',
						marginBottom: 20,
						marginTop: 80
					}}/>
					<Input label={'User Name'} tag={'measurer_username'} />
					<Input label={'Password'} tag={'measurer_password'} secureTextEntry={true} />
					<Button
						type={'primary'}
						label={'MASUK'}
						backgroundColor={'pink'}
						onPress={handleLogin(navigation, patientData, dispatch)}
					/>
					<Text style={{
						width: '100%',
						textAlign: 'center',
						marginTop: 20
					}}>
						Belum Punya Akun?
					</Text>
					<Button
						type={'secondary'}
						label={'Daftar'}
						navigation={navigation}
						to={'Register'}
					/>
				</View>
			</Body>
			<Footer />
		</Container>
	);
}

export default Loader;
