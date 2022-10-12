import React from 'react';
import { View, Text } from 'react-native';
import styles from './CryptoList.style';

// utils
import { formatIDRNoDecimal, formatDecimal } from '../../utils/Currency';
import Shimmering from "../LoadingPlaceholder/LoadingPlaceholder.comp";

// style & icon
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';
import color from "../../utils/Color";
const Icon = createIconSetFromFontello(fontelloConfig);

// Translation
import { useTranslation } from 'react-i18next';
import { testID } from '../../utils/Native';

type CryptoListItemProps = {
	index: number;
	lastRates: string | number;
	tokenRates: string | number;
	token: string;
	tokenSymbol: string;
	tokenAmount: number | string;
	idrAmount: number | string;
};

const checkTokenRates = (tokenRates: string | number, t: Function) => {
	if (tokenRates && tokenRates !== 'timeout') {
		return formatIDRNoDecimal(tokenRates);
	} else if (tokenRates === 'timeout') {
		return t('component.crypto_list.content.fail_to_load')
	} else {
		return <Shimmering wrapperStyle={{width: 127, height: 20, borderRadius: 12, marginTop: 5}} />
	}
};

const checkTokenAmount = (tokenAmount: string | number, tokenSymbol: string, t: Function) => {
	if (typeof tokenAmount === 'number') {
		return <Text style={styles.amount}>{`${tokenSymbol.toUpperCase()} ${formatDecimal(tokenAmount)}`}</Text>
	} else if (tokenAmount === 'timeout') {
		return <Text>{t('component.crypto_list.content.fail_to_load')}</Text>
	} else {
		return <Shimmering wrapperStyle={{width: 100, height: 20, borderRadius: 12, marginTop: 0, marginBottom: 7 }} />
	}
};

const checkIDRAmount = (idrAmount: string | number, t: Function) => {
	if (typeof idrAmount === 'number') {
		return <Text style={styles.amountIdr}>{formatIDRNoDecimal(idrAmount)}</Text>
	} else if (idrAmount === 'timeout') {
		return <Text style={styles.amountIdr}>t('component.crypto_list.content.fail_to_load')</Text>
	} else {
		return <Shimmering wrapperStyle={{ width: 100, height: 20, borderRadius: 12, marginTop: 3 }} />
	}
}

export const CryptoList: React.FC<CryptoListItemProps> = ({
																														index,
																														tokenRates,
																														token,
																														tokenSymbol,
																														tokenAmount,
																														idrAmount,
																														lastRates,
																													}) => {
	const changes = lastRates === null ? 0 : (Number(tokenRates) - Number(lastRates)) / Number(lastRates) * 100;
	const { t } = useTranslation();

	return (
		<View style={styles.list} key={`${index}_main`}>
			<View style={styles.leftBar} key={`${index}_left`}>
				<View style={styles.ethIcon}>
					<Icon
						name={'ethereum'}
						color={color.white}
						size={24}
					/>
				</View>
				<View>
					<Text style={styles.token} {...testID('component_cryptoList_token_label')}>
						{token} ({tokenSymbol.toUpperCase()})
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.rates} {...testID('component_cryptoList_tokenRates_content')}>
							{checkTokenRates(tokenRates, t)}
						</Text>
						{
							<Text {...testID('component_cryptoList_tokenRates_icon')}>
								{tokenRates &&
									<Icon
										name={changes >= 0 ? 'arrow-up' : 'arrow-down'}
										color={changes >= 0 ? color.green : color.red}
										size={16}
									/>}
							</Text>
						}
						<Text
							style={changes >= 0 ? styles.changesIncrease : styles.changesDecrease}
							{...testID('component_cryptoList_tokenRates_percentage')}
						>
							{tokenRates && `${changes.toFixed(2)}%`}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.rightBar}>
				<View {...testID('component_cryptoList_rightBar_tokenAmount')}>{checkTokenAmount(tokenAmount, tokenSymbol, t)}</View>
				<View {...testID('component_cryptoList_rightBar_idrAmount')}>{checkIDRAmount(idrAmount, t)}</View>
			</View>
		</View>
	);
}

export default CryptoList;
