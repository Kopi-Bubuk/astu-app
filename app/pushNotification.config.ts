import { Platform } from 'react-native';

type NotificationProps = {
	action: string;
};

type ErrorProps = {
	message: string;
}

export const PNConfig = {
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
};
