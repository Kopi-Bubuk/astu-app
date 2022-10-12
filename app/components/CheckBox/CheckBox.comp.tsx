import React from 'react';
import { View } from 'react-native';
import styles from './CheckBox.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheckBox: React.FC<{ active: boolean, color: string }> = ({ active, color }) => (
  <View style={active ? styles(color).checkboxActive : styles(color).checkbox}>
    {active ? (
      <FontAwesomeIcon icon={faCheck} color={'white'} size={12} />
    ) : null}
  </View>
);

export default CheckBox;
