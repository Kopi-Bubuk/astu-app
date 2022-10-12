import React from 'react';
import { Text, View } from 'react-native';
import styles from './NetworkSwitcher.style';

const NetworkSwitcher = () => (
  <View style={styles.network}>
    <View style={styles.networkStatus} />
    <Text style={styles.networkLabel}>Ethereum Main Network</Text>
  </View>
);

export default NetworkSwitcher;
