import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import Container from "../../components/Container/Container.comp";
import color from "../../utils/Color";
import CustomStatusBar from "../../components/CustomStatusBar/CustomStatusBar.comp";
import AppHeader from "../../components/AppHeader/AppHeader.comp";
import Body from "../../components/Body/Body.comp";
import Button from "../../components/Button/Button.comp";
import { post } from "../../hooks/useApi";
import DataContext from "../../stores/Provider";

import InputSection from "../../components/InputSection/InputSection.comp";
import { getLocalValue, removeAllLocalValue } from "../../utils/LocalStorage";

const handleLogout = (navigation, dispatch) => () => {
	dispatch({ type: 'IS_LOADING' });
	post('logout').then(result => {
		setTimeout(() => {
			navigation.navigate('Landing');
			removeAllLocalValue().then(result => {
				dispatch({ type: 'IS_SUCCESS' });
			});
		}, 1500);
	})
};

const Profile = ({ navigation }) => {
	const { dispatch } = useContext(DataContext);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		getLocalValue('@userProfileName').then(result => {
			result && setUserName(result);
		});
	}, [userName]);

	useEffect(() => {
		getLocalValue('@userProfileEmail').then(result => {
			result && setEmail(result);
		});
	}, [email]);

	return (
		<Container backgroundColor={color.backgroundGrey}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={'Home'}
				title={'Profile'}
			/>
			<Body type={'scroll'} height={'full'} scrollEnabled={true}>
				<View style={{
					width: '100%',
					padding: 20
				}}>
					<InputSection title={'Data User'}>
						<Text style={{
							fontSize: 18,
							fontWeight: 'bold',
							marginBottom: 3
						}}>
							{userName}
						</Text>
						<Text style={{
							marginBottom: 12
						}}>
							{email}
						</Text>
					</InputSection>
					<Button type={'primary'} label={'LOG OUT'} onPress={handleLogout(navigation, dispatch)} />
				</View>
			</Body>
		</Container>
	)
};

export default Profile;
