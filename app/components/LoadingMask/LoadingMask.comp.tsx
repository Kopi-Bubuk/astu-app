import {ActivityIndicator, BackHandler, View} from 'react-native';
import React, { useEffect } from 'react';
import styles from './LoadingMask.style';

const LoadingMask = ({ isLoading }) => {
	useEffect(() => {
		// Disable Physical Back Button Android when Loading
		const onBackPress = () => isLoading;
		BackHandler.addEventListener('hardwareBackPress', onBackPress);
		return () =>
			BackHandler.removeEventListener('hardwareBackPress', onBackPress);
	}, [isLoading]);

	return (
		<View style={styles.loadingMask}>
			<ActivityIndicator size={'large'} color={'white'} />
		</View>
	);
}

export default LoadingMask;
