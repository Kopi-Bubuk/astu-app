import {Platform} from "react-native";

export const monthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const convertEpochToDate = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const year = time.getUTCFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  return `${date} ${monthName[month]} ${year}`;
};

export const convertEpochToHour = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const hour = time.getHours();
	const minute = Number(time.getMinutes()) >= 10 ? time.getMinutes(): `0${time.getMinutes()}`;
  return `${hour}:${minute}`;
};

export const convertEpochToTime = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const hour = time.getHours();
  const minute = Number(time.getMinutes()) >= 10 ? time.getMinutes(): `0${time.getMinutes()}`;
  const year = time.getUTCFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  return `${date} ${monthName[month]} ${year} | ${hour}:${minute}`;
};

export const getMonthYear = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const year = time.getUTCFullYear();
  const month = time.getMonth();
  return `${monthName[month]} ${year}`;
};

export const getCurrentTimeMs = () => {
	const current = new Date();
	const currentMs = current.getTime();
	return Number(currentMs);
};

export const convertDatetoEpoch = (dateStr) => {
	const getDate = dateStr.substring(0, 1);
	const month = dateStr.substring(2, 5);
	const year = dateStr.substring(6, 10)
	const selectedDate = `${getDate}-${monthName.indexOf(month)}-${year}`;
	const date = new Date(selectedDate);
	return Number(date.getTime());
};

export const convertDateFormat = (dateStr) => {
	const getDate = dateStr.substring(0, 2);
	const month = dateStr.substring(3, 6);
	const year = dateStr.substring(7, 11)
	const selectedDate = Platform.OS === 'ios' ? `${monthName.indexOf(month) + 1}-${getDate}-${year}` : `${year}-${monthName.indexOf(month) + 1}-${getDate}`;
	return selectedDate;
};

export const convertDateMonthName = (dateStr) => {
	const getDate = dateStr && dateStr.substring(8, 10);
	const month = dateStr && dateStr.substring(5, 7);
	const year = dateStr && dateStr.substring(0, 4);
	const selectedDate = `${getDate} ${monthName[month - 1]} ${year}`;
	return selectedDate;
};

export default {
  convertEpochToTime,
  convertEpochToDate,
  convertEpochToHour,
  getMonthYear,
	getCurrentTimeMs
};
