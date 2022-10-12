import React from 'react';
import { View, Text } from 'react-native';
import styles from './TagInput.styles';

const TagInput: React.FC<{ text: string }> = ({ text }) => (
  <View style={styles(text).tag}>
    <Text style={styles().tagLabel}>{text}</Text>
  </View>
);

export default TagInput;
