import React, { useState } from 'react';
import {
	Animated,
	Dimensions,
	StyleProp,
	View,
	ViewStyle,
	LayoutChangeEvent,
} from 'react-native';

// Styles
import LinearGradient from 'react-native-linear-gradient';
import styles from './LoadingPlaceholder.style';

interface LoadingAnimationProps {
	colors?: Array<string>;
	gradientStyle?: StyleProp<ViewStyle>;
	wrapperStyle?: StyleProp<ViewStyle> & {width: number; height: number};
}

const GREY = 'rgb(234, 234, 234)';
const ShimmeringAnimatedValue = new Animated.Value(0);
const ShimmeringAnimation = Animated.loop(
	Animated.timing(ShimmeringAnimatedValue, {
		useNativeDriver: true,
		delay: 800,
		duration: 500,
		toValue: 1,
	}),
);

const LoadingPlaceholder: React.FC<LoadingAnimationProps> = (
	{ colors,
		gradientStyle,
		wrapperStyle
	}) => {
	const gradientColors = [GREY, '#fff', GREY];
	const [viewWidth, setViewWidth] = useState(0);

	const _onLayoutChange = (event: LayoutChangeEvent) => {
		setViewWidth(event.nativeEvent.layout.width);
		ShimmeringAnimation.start();
	}

	const _getLeftValue = () => {
		return ShimmeringAnimatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [-viewWidth, viewWidth],
		});
	}

	const width = Dimensions.get('screen').width;
	const loadingStyle = {backgroundColor: GREY};
	const left = _getLeftValue();

	return (
		<View style={{ width: wrapperStyle?.width ?? width, height: wrapperStyle?.height ?? 80 }}>
			<View
				style={[styles.container, loadingStyle, wrapperStyle]}
				onLayout={event => _onLayoutChange(event)}>
				<Animated.View
					style={[
						{
							flex: 1,
							transform: [{
								translateX: left
							}]
						},
						gradientStyle,
					]}>
					<LinearGradient
						colors={colors || gradientColors}
						start={{x: 0.3, y: 0.2}}
						end={{x: 0.8, y: 0.5}}
						style={{flex: 1}}
					/>
				</Animated.View>
			</View>
		</View>
	);
};

export default LoadingPlaceholder;
// Reference : https://github.com/codeReview-youtube/rn-shimmering/blob/main/src/Shimmering.tsx
