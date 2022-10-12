import crypto from 'crypto';
// import { AES_KEY } from '@env';
import base64 from 'react-native-base64';

const AES_KEY = 'sSYZ9+2uP&TpKG$nUbk8=vb9rdGeQ@N5';

export const add = (num: number): number => num;

export const truncateString = (string: string, maxLength: number) => {
	if (string.length > maxLength) {
		return `${string.slice(0, maxLength)}...${string.slice(
			string.length - 4,
			string.length,
		)}`;
	} else {
		return string;
	}
};

export const arrayAllItemEqual = (arr: Array<any>) => arr.every((v) => v === arr[0]);

export const shuffleArray = (array: Array<any>) => {
	// reassign to make sure original array not shuffled
	let shuffled = [...array];

	let currentIndex = shuffled.length,
		temporaryValue,
		randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = shuffled[currentIndex];
		shuffled[currentIndex] = shuffled[randomIndex];
		shuffled[randomIndex] = temporaryValue;
	}
	return shuffled;
};

export const alphabetOnly = (string: string) => string ? string.replace(/\d/g, '') : '';

export const validateEthereumAddress = (inputValue: string) => {
	const isPrefixValid = inputValue.startsWith('0x');
	const isLengthValid = inputValue.length === 42;
	return isPrefixValid && isLengthValid;
};

export const decryptSeedPhrase = (seed: string) => {
	const algorithm = 'aes-256-cfb';
	const contents = Buffer.from(seed, 'base64');
	const iv = contents.slice(0, 16);
	const textBytes = contents.slice(16);
	const decipher = crypto.createDecipheriv(algorithm, AES_KEY, iv);
	let res: string = decipher.update(textBytes, '', 'utf8');
	res += decipher.final('utf8');
	return res;
};

export const encryptSeedPhrase = (seedPhrase: string) => {
	const algorithm = 'aes-256-cfb';
	const iv = seedPhrase.substring(0, 16);
	const salt = seedPhrase.slice(0, 16);
	let cipher = crypto.createCipheriv(algorithm, AES_KEY, iv);
	let encrypted = cipher.update(salt + seedPhrase, 'utf8', 'base64');
	encrypted += cipher.final('base64');
	return encrypted;
};

export const getTokenExpiry = (token?: string) => {
	const base64Url = token && token.split('.')[1];
	const data = base64Url && base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const decoded = base64.decode(data);
	const expired = decoded.split(',')[1];
	const expiredTime = expired && expired.replace('"exp":', '');
	return Number(expiredTime) * 1000;
};
