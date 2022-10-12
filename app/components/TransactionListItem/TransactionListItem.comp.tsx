import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// styling
import styles from './TransactionListItem.style';

// utils
import { formatDecimal, formatIDRNoDecimal } from '../../utils/Currency';
import { convertEpochToHour, convertEpochToDate } from '../../utils/Time';
import { useNavigation } from '@react-navigation/native';

// image
const sendImage = require('../../assets/img/send-eth.png');
const receiveImage = require('../../assets/img/receive-eth.png');

// Navigation Types
import type { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';

type NavigationProps = NavigationHelpers<ParamListBase>;

type TransactionListItemProps = {
  index?: number | string;
  transactionId?: number | string;
  amount: number;
  amountIDR: number;
  token: string;
  timestamp: number;
  status: string;
  type: string;
  txAddress?: string;
  noBorder?: boolean;
	gasFee: number;
	gasFeeIDR: number;
};

const navigateToDetail =
  (
    navigation: NavigationHelpers<ParamListBase>,
    transactionProps: TransactionListItemProps,
  ) =>
  () => {
    navigation.navigate('TransactionDetail', transactionProps);
  };

const TransactionListItem = ({
  index,
  transactionId,
  amount,
  amountIDR,
  token,
  timestamp,
  status,
  type,
  txAddress,
  noBorder,
	gasFee,
	gasFeeIDR
}: TransactionListItemProps) => {
  const navigation = useNavigation<NavigationProps>();
  const transactionProps = {
    transactionId,
    amount,
    amountIDR,
    token,
    timestamp,
    status,
    type,
    txAddress,
		gasFee,
		gasFeeIDR
  };
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      onPress={navigateToDetail(navigation, transactionProps)}
      style={noBorder ? styles.listNoBorder : styles.list}
      key={index}>
      <View style={styles.leftBar}>
        <Image
          source={type === 'SEND' ? sendImage : receiveImage}
          style={styles.image}
        />
        <View>
          <View style={styles.headerStatus}>
            <Text style={styles.token}>
              {type === 'SEND' ? `${t('component.transaction_list.status.send')} ${token}` : `${t('component.transaction_list.status.receive')} ${token}`}
            </Text>
            {status !== 'SUCCESS' && (
              <Text style={styles.status}>{status}</Text>
            )}
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{convertEpochToDate(timestamp)}</Text>
            <View style={styles.dateSeparator} />
            <Text style={styles.date}>{convertEpochToHour(timestamp)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightBar}>
        <Text style={styles.amount}>
          {type === 'SEND' ? `-${token} ` : `+${token} `}
          {formatDecimal(amount)}
        </Text>
        <Text style={styles.amountIDR}>
          {type === 'SEND' ? '-' : '+'}
          {formatIDRNoDecimal(amountIDR)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

TransactionListItem.defaultProps = {
  index: 0,
  transactionId: '',
  amount: 0,
  amountIDR: 0,
  token: '',
  timestamp: 0,
  status: '',
  type: '',
  txAddress: '',
  noBorder: '',
};

export default TransactionListItem;
