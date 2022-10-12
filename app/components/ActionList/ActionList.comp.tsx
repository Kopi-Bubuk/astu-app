import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './ActionList.comp.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import color from '../../utils/Color';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';

type ActionProps = {
	data: any,
	navigation?: NavigationHelpers<ParamListBase>,
	type?: string,
	selectedValue?: any,
	setValue?: Function
};

type ActionItemProps = {
	title: string;
	navigate: string;
	params: object;
	value: string;
};

type SectionProps = {
	title: string;
	actions: any;
};

const navigateTo = (
	navigation?: NavigationHelpers<ParamListBase>,
	target?: string,
	params?: any
) => () => navigation && navigation.navigate(target || '', params);

const switchOption = (value: any, setValue?: Function) => () => {
	setValue && setValue(value);
};

export const ActionList = ({
	data,
	navigation,
	type,
	selectedValue,
	setValue
}: ActionProps) => {
	const { t } = useTranslation();

	return (
		<View>
			{
				data.sections.map((
						{ title, actions }: SectionProps, index: number) => (
						<View style={styles().actions} key={index}>
							<Text style={styles().actionTitle}>{t(title)}</Text>
							<View style={styles().actionList}>
								{actions.map(({ title, navigate, params, value }: ActionItemProps, index: number) => (
										<TouchableOpacity
											key={index}
											style={styles().actionListItem}
											onPress={
												type === 'option'
													? switchOption(value, setValue)
													: navigateTo(navigation, navigate, params)
											}
										>
											<Text>{t(title)}</Text>
											{type === 'option'
												? <View style={styles().option}><View style={styles(selectedValue === value).optionFill} /></View>
												: <FontAwesomeIcon icon={faChevronRight} color={color.grey} size={18} />
											}
										</TouchableOpacity>
									),
								)}
							</View>
						</View>
					)
				)
			}
		</View>
	);
};

export default ActionList;
