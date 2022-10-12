import React, { useState, useEffect } from 'react';
import { Text, Animated, View } from 'react-native';
import type { TranslateYTransform } from 'react-native';

// styling
import styles from './Notification.style';
import color from '../../utils/Color';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faExclamationTriangle,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// config
import { notificationProps } from './Notification.config';

const renderSuccess = (
  text: string,
  type: string,
  fadeAnimation?: Animated.Value,
  slideAnimation?: TranslateYTransform['translateY']
) => (
  <Animated.View
    style={styles(type, fadeAnimation, slideAnimation).notification}>
		<View style={styles().notificationCheck}>
			<FontAwesomeIcon icon={faCheck} color={color.green} size={12} />
		</View>
    <Text style={styles().notificationLabel}>{text}</Text>
  </Animated.View>
);

const renderError = (
  text: string,
  type: string,
  fadeAnimation?: Animated.Value,
  slideAnimation?: TranslateYTransform['translateY'],
) => (
  <Animated.View
    style={styles(type, fadeAnimation, slideAnimation).notification}>
    <FontAwesomeIcon
      icon={faExclamationTriangle}
      color={color.white}
      size={18}
    />
    <Text style={styles().notificationLabel}>{text}</Text>
  </Animated.View>
);

const renderNotification = (
  text: string,
  type: string,
  fadeAnimation?: Animated.Value,
  slideAnimation?: TranslateYTransform['translateY']
) =>
  type === 'success'
    ? renderSuccess(text, type, fadeAnimation, slideAnimation)
    : renderError(text, type, fadeAnimation, slideAnimation);

const handleSlideAnimation = (slideAnimation: Animated.Value) =>
  Animated.timing(slideAnimation, {
    toValue: 100,
    duration: 200,
    useNativeDriver: true,
  }).start();

const handleFadeAnimation = (
  fadeAnimation: Animated.Value,
  dispatch: Function,
) => {
  Animated.timing(fadeAnimation, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  setTimeout(() => {
    dispatch && dispatch({ type: 'REMOVE_NOTIFICATION' });
  }, 1000);
};

const Notification: React.FC<notificationProps> = ({
  show,
  text,
  type,
  dispatch,
}) => {
  const [fadeAnimation] = useState(new Animated.Value(1));
  const [slideAnimation] = useState<any>(new Animated.Value(0));

  useEffect(() => {
    handleSlideAnimation(slideAnimation);
    if (show) {
      setTimeout(() => {
        handleFadeAnimation(fadeAnimation, dispatch);
      }, 3000);
    }
  }, [show]);

  return show
    ? renderNotification(text, type, fadeAnimation, slideAnimation)
    : null;
};

export default Notification;
