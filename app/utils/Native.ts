import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Alert, Linking, Platform } from 'react-native';

export const openSettings = () => () => Linking.openSettings();

const cameraActivationDialog = (navigation) => {
	Alert.alert(
		'Kamu belum mengaktifkan kamera',
		'Aktifkan kamera melalui halaman setting',
		[
			{
				text: 'Buka Halaman Settings',
				onPress: openSettings()
			},
			{
				text: 'Kembali',
				onPress: () => navigation.navigate('Home')
			}
		]
	)
};

export const checkCameraPermission = async (
	setCameraReadyStatus,
	setAuthorizationStatus,
	navigation
) => {
	check(PERMISSIONS.IOS.CAMERA)
		.then((result) => {
			switch (result) {
				case RESULTS.UNAVAILABLE:
					Alert.alert('This feature is not available (on this device / in this context)');
					break;
				case RESULTS.DENIED:
					cameraActivationDialog(navigation);
					break;
				case RESULTS.LIMITED:
					Alert.alert('The permission is limited: some actions are possible');
					break;
				case RESULTS.GRANTED:
					setCameraReadyStatus(true);
					setAuthorizationStatus(true);
					break;
				case RESULTS.BLOCKED:
					cameraActivationDialog(navigation);
					break;
			}
		})
		.catch((error) => {
			return error;
		});
};

export const testID = (id: string) => {
	return Platform.OS === 'android'
		? { accessible: true, accessibilityLabel: id }
		: { testID: id }
}

export const tabTestID = (id: string) => {
	return Platform.OS === 'android'
		? { tabBarAccessibilityLabel: id }
		: { tabBarTestID: id }
}
