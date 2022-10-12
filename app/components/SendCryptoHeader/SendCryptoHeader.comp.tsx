import React from 'react';
import { Image, Text, View } from 'react-native';
import { formatDecimal } from '../../utils/Currency';
import styles from './SendCryptoHeader.style';

// Images
const Limit = require('../../assets/img/limit.png');
const TokenLogo = require('../../assets/img/ether-white.png');

// Translation
import { useTranslation } from 'react-i18next';

type SendCryptoHeaderProps = {
	token: string;
	amount: string | number;
	amountIDR: string;
	customLabel?: string;
	isWarning?: boolean;
};

const renderWarning = (t: Function) => (
  <View style={styles.warning}>
    <Image source={Limit} style={styles.warningLogo} />
    <Text style={styles.warningMessage}>{t('component.send.confirmation.warning')}</Text>
  </View>
);

const SendCryptoHeader: React.FC<SendCryptoHeaderProps> = ({
  token,
  amount,
  amountIDR,
  customLabel,
  isWarning,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.asset}>
      <Text style={styles.assetTitle}>
        {customLabel ? customLabel : t('component.send.asset.title')}
      </Text>
      <View style={styles.assetInfo}>
        <Image source={TokenLogo} style={styles.tokenLogo} />
        <View>
          <Text style={styles.assetAmount}>
            {token} {formatDecimal(amount)}
          </Text>
          <Text style={styles.assetExchange}>{amountIDR}</Text>
        </View>
      </View>
      {isWarning && renderWarning(t)}
    </View>
  );
};

export default SendCryptoHeader;
