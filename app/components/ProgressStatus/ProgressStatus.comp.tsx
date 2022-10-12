import React from 'react';
import { View, Text } from 'react-native';
import styles from './ProgressStatus.style';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import get from 'lodash/get';
import { RouteProp } from "@react-navigation/core";

type StepProps = {
	index: number;
	active: boolean;
	isChecked?: boolean;
};

const Step = ({ index, active, isChecked }: StepProps) => (
	<View style={styles().step}>
		{isChecked ? (
			<View style={styles(isChecked).stepNumberActive}>
				<FontAwesomeIcon icon={faCheck} color={'white'} size={15} />
			</View>
		) : (
			<View style={active ? styles().stepNumberActive : styles().stepNumber}>
				<Text style={styles().stepLabel}>{index}</Text>
			</View>
		)}
	</View>
);

export const ProgressStatus: React.FC<{
	activeStatus: string,
	route?: RouteProp<any>
}> = (
	{ activeStatus, route }
) => {
	const isHasExistingSeedPhrase = get(route, 'params.isHasExistingSeedPhrase', false);

	return (
		<View style={styles().progressWrapper}>
			{(activeStatus === 'info' || activeStatus === 'login') && <View style={styles().progressBar} />}
			{activeStatus === 'secret' && (
				<View style={styles().progressBarWrapper}>
					<View style={styles().progressBarActiveHalf} />
					<View style={styles().progressBarHalf} />
				</View>
			)}
			{activeStatus === 'pin' && <View style={styles().progressBarActive} />}
			<View style={styles().progress}>
				<Step
					index={1}
					active={
						activeStatus === 'info' ||
						activeStatus === 'secret' ||
						activeStatus === 'pin' ||
						activeStatus === 'login'
					}
					isChecked={activeStatus === 'secret' || activeStatus === 'pin'}
				/>
				{(activeStatus !== 'login' && !isHasExistingSeedPhrase) &&
					<Step
						index={2}
						active={activeStatus === 'secret' || activeStatus === 'pin'}
						isChecked={activeStatus === 'pin'}
					/>
				}
				<Step index={isHasExistingSeedPhrase ? 2 : 3} active={activeStatus === 'pin'} />
			</View>
		</View>
	);
}

export default ProgressStatus;
