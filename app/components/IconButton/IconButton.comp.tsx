import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import styles from './IconButton.style';

const IconButton = (props: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  noSpacing: any;
  icon: ImageSourcePropType;
  label:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <View style={styles.buttonContainer}>
      <Image source={props.icon} style={styles.icon} />
    </View>
    <Text style={styles.label}>{props.label}</Text>
  </TouchableOpacity>
);

export default IconButton;
