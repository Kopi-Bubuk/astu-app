import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './EmptyState.style';

// Image
const AddressNotFound = require('../../assets/img/address-not-found.png');

const EmptyState: React.FC<{ desc: string }> = ({ desc }) => (
	<View style={styles.receiverEmpty}>
		<View style={styles.addressNotFound}>
			<Image source={AddressNotFound} style={styles.addressNotFoundImage} />
			<Text style={styles.addressNotFoundLabel}>
				{desc}
			</Text>
		</View>
	</View>
);

export default EmptyState;
