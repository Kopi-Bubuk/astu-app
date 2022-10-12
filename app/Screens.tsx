import React from 'react';

// Library
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';

// Screen
import LoaderScreen from './screens/Loader/Loader.screen';
import LandingScreen from './screens/Landing/Landing.screen';
import HomeScreen from './screens/Home/Home.screen';
import SendScreen from './screens/Send/Send.screen';
import SendInputScreen from './screens/SendInput/SendInput.screen';
import ReceiveScreen from './screens/Receive/Receive.screen';
import WebViewScreen from './screens/WebView/WebView.screen';
import MeasureWeightHeightScreen from './screens/MeasureWeightHeight/MeasureWeightHeight.screen';
import NFTImportScreen from './screens/NFTImport/NFTImport.screen';
import NFTSendScreen from './screens/NFTSend/NFTSend.screen';
import ProfileScreen from './screens/Profile/Profile.screen';
import RegisterScreen from './screens/Register/Register.screen';
import PatientChoose from "./screens/PatientChoose/PatientChoose.screen";

const Stack = createStackNavigator();
type ScreenProps = {
	isRegistered: boolean | null;
	screenOptionStyle: any;
};

const renderFirstTimeLoad = (isRegistered: boolean) => {
	if (isRegistered) {
		return (
			<>
				<Stack.Screen
					name="Loader"
					component={LoaderScreen}
					options={{
						cardStyleInterpolator:
						CardStyleInterpolators.forFadeFromBottomAndroid,
					}}
				/>
				<Stack.Screen name="Landing" component={LandingScreen} />
			</>
		);
	} else {
		return (
			<>
				<Stack.Screen name="Landing" component={LandingScreen} />
				<Stack.Screen
					name="Loader"
					component={LoaderScreen}
					options={{
						cardStyleInterpolator:
						CardStyleInterpolators.forFadeFromBottomAndroid,
					}}
				/>
			</>
		)
	}
};

const Screens: React.FC<ScreenProps> = ({ isRegistered, screenOptionStyle }) => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptionStyle}>
				{renderFirstTimeLoad(isRegistered)}
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen name="PatientChoose" component={PatientChoose} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Send" component={SendScreen} />
				<Stack.Screen name="SendInput" component={SendInputScreen} />
				<Stack.Screen name="Receive" component={ReceiveScreen} />
				<Stack.Screen name="WebView" component={WebViewScreen} />
				<Stack.Screen name="MeasureWeightHeight" component={MeasureWeightHeightScreen} />
				<Stack.Screen name="NFTImport" component={NFTImportScreen} />
				<Stack.Screen name="NFTSend" component={NFTSendScreen} />
				<Stack.Screen name="*" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Screens;
