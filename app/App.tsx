import React, { useEffect, useReducer, useState } from 'react';
import { View } from 'react-native';

// Styling
import styles from './App.style';

// Library
import { TransitionPresets } from '@react-navigation/stack';
import SplashScreen from 'react-native-lottie-splash-screen';
import { useIsEmulator } from 'react-native-device-info';

// Screen & Components
import Notification from './components/Notification/Notification.comp';
import BottomSheet from './components/BottomSheet/BottomSheet.comp';
import LostConnection from './components/LostConnection/LostConnection.comp';
import Screens from './Screens';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// State Management
import reducer from './reducer';
import initialState from './initialState';
import DataContext from './stores/Provider';
import { useNetInfo } from '@react-native-community/netinfo';

// Push Notification
// import PushNotification from 'react-native-push-notification';
// import { PNConfig } from './pushNotification.config';

// Translation
import './translations/i18n';
import { useTranslation } from 'react-i18next';

// Loading Mask
import LoadingMask from './components/LoadingMask/LoadingMask.comp';
import { getLocalValue } from './utils/LocalStorage';

const initialRef = {
	current: {
		present: () => {},
		dismiss: () => {}
	}
}

const App: React.FC = () => {
	const [bottomSheetRef, getBottomSheetRef] = useState(initialRef);
	const [bottomSheetType, setBottomSheetType] = useState('');
	const [isShowBackgroundMask, setBackgroundMask] = useState(false);
	const [isConnected, setConnection] = useState<boolean | null>(null);
	const [navigation, setNavigation] = useState(null);
	const [isRegistered, setRegistrationStatus] = useState<boolean | null>(null);
	const [content, setBottomSheetContent] = useState({});
	const [state, dispatch] = useReducer(reducer, initialState);

	// Hooks
	const netInfo = useNetInfo();
	const { loading, result } = useIsEmulator();
	const { t } = useTranslation();

	if (!loading && !result) {
		// Must be outside of any component LifeCycle
		// PushNotification.configure(PNConfig);
	}

	const screenOptionStyle = {
		headerShown: false,
		...TransitionPresets.SlideFromRightIOS,
	};

	const openBottomSheet = () => bottomSheetRef.current && bottomSheetRef.current.present();
	const dismissBottomSheet = () => {
		setBottomSheetType('');
		bottomSheetRef.current && bottomSheetRef.current.dismiss();
	};

	const action = {
		openBottomSheet,
		dismissBottomSheet,
		setBottomSheetType,
		setBackgroundMask,
		isShowBackgroundMask,
		setNavigation,
		setBottomSheetContent,
		bottomSheetRef
	};

	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 1500);
		setConnection(netInfo.isConnected);
		getLocalValue('@userProfileName').then((result) => {
			if (result !== null) {
				setRegistrationStatus(true);
			} else {
				setRegistrationStatus(false);
			}
		});
	}, [netInfo.isConnected]);

	return (
		<BottomSheetModalProvider>
			<DataContext.Provider value={{ ...state, dispatch, ...action }}>
				{state.isLoading && <LoadingMask isLoading={state.isLoading} />}
				<View style={styles.app}>
					{state.showNotification && (
						<Notification
							show={state.showNotification}
							text={t(state.notificationText)}
							type={state.notificationType}
							dispatch={dispatch}
						/>
					)}
					{
						isConnected === false
							? <LostConnection />
							: <Screens
								isRegistered={isRegistered}
								screenOptionStyle={screenOptionStyle}
							/>
					}
				</View>
				<BottomSheet
					dismissBottomSheet={dismissBottomSheet}
					isShowBackgroundMask={isShowBackgroundMask}
					setBackgroundMask={setBackgroundMask}
					bottomSheetType={bottomSheetType}
					dispatch={dispatch}
					navigation={navigation}
					setBottomSheetContent={setBottomSheetContent}
					setBottomSheetType={setBottomSheetType}
					getBottomSheetRef={getBottomSheetRef}
					content={content}
				/>
			</DataContext.Provider>
		</BottomSheetModalProvider>
	);
};

export default App;
