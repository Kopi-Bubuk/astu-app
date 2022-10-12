import React from 'react';
import { View, Text } from 'react-native';
import styles from './Tag.styles';

type TagProps = {
	text: string,
	size?: string,
	index?: number
};

const Tag: React.FC<TagProps> = ({ text, size, index }) => (
  <View style={size === 'small' ? styles.tagSmall : styles.tag}>
		<View style={styles.index}>
			<Text style={styles.indexLabel}>{index}</Text>
		</View>
    <Text style={size === 'small' ? styles.tagLabelSmall : styles.tagLabel}>
      {text}
    </Text>
  </View>
);

export default Tag;
