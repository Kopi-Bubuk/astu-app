import React, { useRef, useEffect, RefObject, Fragment } from 'react';
import { View, Text, Pressable, Image, ImageSourcePropType } from 'react-native';

import styles from './BottomSheet.style';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { removeLocalValue, setLocalValue } from '../../utils/LocalStorage';
import Title from '../Title/Title.comp';
import Button from '../Button/Button.comp';
import { NavigationHelpers, ParamListBase } from "@react-navigation/core";

type ContentProps = {
	title?: string;
	desc?: string;
	image?: ImageSourcePropType;
	imageSize?: string;
	buttonLabel?: string;
	isShowButton?: boolean;
	buttonHandler?: Function;
	buttonType?: string;
	isCloseable?: boolean;
};

type BottomSheetProps = {
	dismissBottomSheet: Function;
	isShowBackgroundMask?: boolean;
	setBackgroundMask: Function;
	bottomSheetType: string;
	dispatch: Function;
	navigation: NavigationHelpers<ParamListBase> | null;
	setBottomSheetType: Function;
	getBottomSheetRef?: Function;
	content: ContentProps;
	setBottomSheetContent?: Function;
	bottomSheetRef?: RefObject<any>;
};

type BackgroundMaskProps = {
	dismissBottomSheet: Function;
	isShowBackgroundMask?: boolean;
	setBackgroundMask?: Function;
	bottomSheetRef?: RefObject<any>;
	setBottomSheetContent?: Function;
	isCloseable?: boolean;
};

const BackgroundMask = ({
													dismissBottomSheet,
													isShowBackgroundMask,
													setBackgroundMask,
													bottomSheetRef,
													setBottomSheetContent,
													isCloseable
												}: BackgroundMaskProps) => {
	return (
		isShowBackgroundMask ?
			<Pressable
				style={styles.backgroundMask}
				onPress={closeBottomSheet(
					dismissBottomSheet,
					setBackgroundMask,
					bottomSheetRef,
					setBottomSheetContent,
					isCloseable
				)}
			/> : <Fragment />
	)
}

const getSnapPoints = (bottomSheetType: string) => {
	if (bottomSheetType === 'logout') {
		return ['30%', '55%']
	} else if (bottomSheetType === 'secretPhraseInvalid') {
		return ['40%', '55%']
	} else if (bottomSheetType === 'secretPhraseSuccess') {
		return ['47%', '55%']
	} else if (
		bottomSheetType === 'changePin' || bottomSheetType === 'newUser' || bottomSheetType === 'idleRegister'
	) {
		return ['55%', '55%']
	} else {
		return ['50%', '55%']
	}
};

const closeBottomSheet = (
	dismissBottomSheet: Function,
	setBackgroundMask?: Function,
	bottomSheetRef?: RefObject<any>,
	setBottomSheetContent?: Function,
	isCloseable?: boolean
) => async () => {
	if (isCloseable !== false) {
		setBottomSheetContent && setBottomSheetContent({ isVisible: false });
		setBackgroundMask && setBackgroundMask(false);
		if (bottomSheetRef) dismissBottomSheet();
		await removeLocalValue('@isChangePinSuccess');
		await setLocalValue('@isRegistrationPopupAlreadyShown', 'true');
	}
};

const navigateTo = (
	navigation: NavigationHelpers<ParamListBase> | null,
	dismissBottomSheet: Function,
	setBackgroundMask: Function,
	setBottomSheetType: Function,
	dispatch: Function,
	bottomSheetRef?: RefObject<any>
) => () => {
	dispatch({ type: 'IS_LOADING'});
	closeBottomSheet(dismissBottomSheet, setBackgroundMask, bottomSheetRef)();
	setTimeout(() => {
		navigation && navigation.navigate('CreatePin', { isHasExistingSeedPhrase: true });
		dispatch({ type: 'IS_SUCCESS'});
	}, 1000);
};

const renderCustomBottomSheet = (
	content: ContentProps,
	navigation: NavigationHelpers<ParamListBase> | null,
	dismissBottomSheet: Function,
	setBackgroundMask: Function,
	setBottomSheetType: Function,
	dispatch: Function,
	bottomSheetRef?: React.RefObject<any>
) => {
	const {
		title, desc, image, imageSize, buttonLabel, isShowButton, buttonHandler, buttonType
	}: ContentProps = content;

	return (
		<View style={styles.bottomSheetContent}>
			{image && <Image source={image} style={
				imageSize === 'regular'
					? styles.bottomSheetImage
					: styles.bottomSheetImageAlt
			} />}
			{title && <Title text={title} align={'center'} />}
			<Text style={styles.bottomSheetDesc}>
				{desc}
			</Text>
			{isShowButton && <Button
				onPress={buttonHandler
					? buttonHandler
					: navigateTo(
						navigation,
						dismissBottomSheet,
						setBackgroundMask,
						setBottomSheetType,
						dispatch,
						bottomSheetRef
					)
				}
				type={buttonType}
				label={buttonLabel ? buttonLabel : ''}
				isBottomSheetButton={true}
			/>}
		</View>
	);
}

const BottomSheetContent = (
	{
		bottomSheetType,
		dismissBottomSheet,
		setBackgroundMask,
		dispatch,
		navigation,
		setBottomSheetType,
		bottomSheetRef,
		content
	}: BottomSheetProps) => {
	if (bottomSheetType === null) return <View />;
	return renderCustomBottomSheet(
		content,
		navigation,
		dismissBottomSheet,
		setBackgroundMask,
		setBottomSheetType,
		dispatch,
		bottomSheetRef
	);
};

const openBottomSheet = (
	setBackgroundMask: Function,
	bottomSheetRef: RefObject<any>,
	content: ContentProps
) => {
	setBackgroundMask(!!content.title);
	content && bottomSheetRef.current.present();
};

export const BottomSheet = ({
															dismissBottomSheet,
															isShowBackgroundMask,
															setBackgroundMask,
															bottomSheetType,
															dispatch,
															navigation,
															setBottomSheetType,
															getBottomSheetRef,
															setBottomSheetContent,
															content
														}: BottomSheetProps) => {
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const { isCloseable } = content;

	useEffect(() => {
		getBottomSheetRef && getBottomSheetRef(bottomSheetRef);
	}, [bottomSheetRef]);

	useEffect(() => {
		if (!!content.title) {
			openBottomSheet(setBackgroundMask, bottomSheetRef, content);
			setTimeout(() => {
				bottomSheetRef.current && bottomSheetRef.current.present();
			}, 300);
		}
	},[content]);

	return (
		bottomSheetType !== null
			? <>
				<BackgroundMask
					dismissBottomSheet={dismissBottomSheet}
					isShowBackgroundMask={isShowBackgroundMask}
					setBackgroundMask={setBackgroundMask}
					bottomSheetRef={bottomSheetRef}
					setBottomSheetContent={setBottomSheetContent}
					isCloseable={isCloseable}
				/>
				<BottomSheetModal
					ref={bottomSheetRef}
					snapPoints={getSnapPoints(bottomSheetType)}
					enablePanDownToClose={isCloseable}
					onDismiss={closeBottomSheet(
						dismissBottomSheet,
						setBackgroundMask,
						bottomSheetRef
					)}
				>
					<BottomSheetContent
						bottomSheetType={bottomSheetType}
						dismissBottomSheet={dismissBottomSheet}
						setBackgroundMask={setBackgroundMask}
						dispatch={dispatch}
						navigation={navigation}
						setBottomSheetType={setBottomSheetType}
						bottomSheetRef={bottomSheetRef}
						content={content}
					/>
				</BottomSheetModal>
			</>
			: <View/>
	);
}

export default BottomSheet;
