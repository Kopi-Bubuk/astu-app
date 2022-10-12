import React from 'react';
import { View, Text } from 'react-native';

import styles from './Box.style';

export const Box: React.FC<{ text: string }> = ({ text }) => (
  <View style={styles.box}>
    <Text style={styles.boxText}>{text}</Text>
  </View>
);

export default Box;
