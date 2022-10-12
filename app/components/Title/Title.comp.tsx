import React from 'react';
import { Text, TextStyle } from "react-native";
import styles from './Title.style';

type TitleProps = {
	text: string;
	align?: TextStyle['textAlign'];
	color?: string;
};

const Title: React.FC<TitleProps> = (
	{ text, align, color }
) => <Text style={styles(align, color).title}>{text}</Text>;

export default Title;
