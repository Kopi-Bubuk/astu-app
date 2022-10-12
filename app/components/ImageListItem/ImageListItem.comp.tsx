import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// Styling
import styles from './ImageListItem.style';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';

type ImageListItemProps = {
	index: number,
	navigation: NavigationHelpers<ParamListBase>,
	item: any
};

const navigateToDetail = (navigation, item) => () => {
	navigation.navigate('MeasureWeightHeight', {
		collection: {
			name: item.name,
			id: item.id,
			owner: item.owner,
			description: item.description,
			url: item.url
		}
	});
};

export const ImageListItem: React.FC<ImageListItemProps> = ({ index, navigation, item }) => {
	return (
		<TouchableOpacity key={index} style={styles.imageWrapper} onPress={navigateToDetail(navigation, item)}>
			<Image source={{ uri: item.url }} style={styles.image} />
			<View style={styles.caption}>
				<Text style={styles.captionText}>{item.name}</Text>
				<Text style={styles.captionText}>{item.id}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ImageListItem;
