import React from 'react';
import { Image, Text, TouchableOpacity, Keyboard } from 'react-native';

// Library
import Clipboard from '@react-native-clipboard/clipboard';

// styling
import styles from './CopyButton.style';
import { useTranslation } from 'react-i18next';

// Images
const copyIcon = require('../../assets/img/copy-icon.png');

type CopyButtonProps = {
	data?: string | Array<string> | Array<null>,
	dispatch?: Function,
	type?: string,
	action?: Function
};

const handlePaste = (copyString?: string, dispatch?: Function, action?: any) => () => {
	Clipboard.getString().then(result => {
		if (!!result) {
			action(result.trim());
			dispatch && dispatch({ type: 'NOTIFICATION_SUCCESS_COPY' });
		} else {
			dispatch && dispatch({ type: 'NOTIFICATION_ERROR_COPY_EMPTY' });
		}
	});
	Keyboard.dismiss();
};

const handleCopy = (copyString?: string, dispatch?: Function) => () => {
  Clipboard.setString(copyString ? copyString : '');
	dispatch && dispatch({ type: 'NOTIFICATION_SUCCESS_COPY' });
};

export const CopyButton: React.FC<CopyButtonProps> = ({
	data,dispatch,type,action
}) => {
  const { t } = useTranslation();
  const label = type === 'paste' ? 'component.copy.paste.label' : 'component.copy.copy.label';
  const copyString = data && data.toString();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={
				type === 'paste'
					? handlePaste(copyString, dispatch, action)
					: handleCopy(copyString, dispatch)
		}>
      <Image source={copyIcon} style={styles.infoIcon} />
      <Text style={styles.buttonLabel}>{t(label)}</Text>
    </TouchableOpacity>
  );
};

export default CopyButton;
