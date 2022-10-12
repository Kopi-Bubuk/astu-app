import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './PinButton.style';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Types
import type { TouchableWithoutFeedbackProps } from 'react-native';

export const PinButton: React.FC<{ label: string, onPress: TouchableWithoutFeedbackProps['onPress'] }> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {label === 'x' ? (
      <FontAwesomeIcon icon={faBackspace} color={'black'} size={36} />
    ) : (
      <Text style={styles.buttonLabel}>{label}</Text>
    )}
  </TouchableOpacity>
);

export default PinButton;
