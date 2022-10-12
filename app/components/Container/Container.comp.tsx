import React from 'react';
import { SafeAreaView } from 'react-native';

// Styling
import styles from './Container.style';

export type ContainerProps = {
	children: React.ReactNode;
	backgroundColor?: string;
	isWebView?: boolean;
};

const Container = (props: ContainerProps) => {
	const { children, backgroundColor, isWebView } = props;

	return (
		<SafeAreaView style={styles(backgroundColor, isWebView).container}>
			{children}
		</SafeAreaView>
	);
}

export default Container;
