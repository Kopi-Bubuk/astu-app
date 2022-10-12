import filter from 'lodash/filter';
import get from 'lodash/get';

export type BalanceProps = {
	eth?: number;
};

type RatesItemProps = {
	crypto: string;
	value: number;
};

export type RatesProps = Array<RatesItemProps> | Array<any>;

export const formatIDR = (amount: number) => {
	const addedSeparator = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
	const decimalFormatted = addedSeparator.replace(/.(?=[^.]*$)/, ',');
	return `Rp. ${decimalFormatted}`;
};

export const formatIDRNoDecimal = (amount: number | string) => {
	const amountNumber = Number(amount);
	const amountValue = isNaN(amountNumber) ? 0 : amountNumber;
	const decimalFormatted = amountValue.toLocaleString('id-ID', {
		style: 'decimal',
		maximumFractionDigits: 0,
	});
	return `Rp ${decimalFormatted}`;
};

export const formatThousandSeparator = (amount: number | string) => {
	const amountNumber = Number(amount);
	const decimalFormatted = amountNumber.toLocaleString('id-ID', {
		style: 'decimal',
		maximumFractionDigits: 0,
	});
	return `${decimalFormatted}`;
};

export const formatDecimal = (amount: number|string) => {
	const amountNumber = Number(amount);
	const decimalFormatted = amountNumber.toLocaleString('id-ID', {
		style: 'decimal',
		maximumFractionDigits: 5,
	});
	return `${decimalFormatted}`;
};

export const formatDecimalInput = (amount: string) => {
	const amountNumber = amount.toString();
	const removeSpecialCharacter = amountNumber.replace(/\D/g, '.');
	const sanitize = removeSpecialCharacter.replace(/[^\d,]/g, '');
	const formattedInput =
		Number(amount) >= 1
			? amountNumber.toString()
			: sanitize.replace(sanitize[0], `${sanitize[0]},`);
	return amountNumber.length === 1 ? amountNumber : formattedInput;
};

export const getTotalAmount = (balance?: BalanceProps | number, IDRRates?: RatesProps) => {
	const ethBalance = get(balance, 'eth', 0);
	const filteredPrices = filter(IDRRates, { crypto: 'ETH' });
	const fiatPrice = filteredPrices[0] && filteredPrices[0].value;
	const total = ethBalance ? (ethBalance * fiatPrice) : 0;
	return formatIDRNoDecimal(total);
};

export default {
	formatIDR,
	formatIDRNoDecimal,
	formatThousandSeparator,
	formatDecimal,
	formatDecimalInput,
	getTotalAmount
};
