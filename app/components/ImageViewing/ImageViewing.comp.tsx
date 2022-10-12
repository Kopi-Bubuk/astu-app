import React, { useState } from "react";
import { ImageRequireSource, ImageURISource, TouchableOpacity } from "react-native";
import ImageView from "../ImageView";

const ImageViewing: React.FC<{
	children?: React.ReactNode;
	imageUrl: ImageURISource | ImageRequireSource;
}> = ({
	children,
	imageUrl,
}) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<TouchableOpacity onPress={() => setIsVisible(true)}>
			{children}
			<ImageView
				images={[imageUrl]}
				imageIndex={0}
				visible={isVisible}
				onRequestClose={() => setIsVisible(false)}
			/>
		</TouchableOpacity>
	);
};

export default ImageViewing;

