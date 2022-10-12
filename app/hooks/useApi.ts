import lodash from 'lodash';

const API_URL = 'https://kopibubuk-september.herokuapp.com';
const NEWS_API = 'https://news-stunting-api.herokuapp.com';

export const post = (url: string, params: any = {}) => {
	const { errorAction, token } = params;
	const body = lodash.get(params, 'body', {});
	const successAction = lodash.get(params, 'successAction', null);

	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Cache-Control', 'no-cache');
	if (token) {
		headers.append('Authorization', `Bearer ${token}`);
	}
	let controller = new AbortController();
	setTimeout(() => controller.abort(), 15000);

	return fetch(`${API_URL}/${url}`, {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
		signal: controller.signal
	})
		.then((response) => response.text())
		.then((result) => {
			if (successAction !== null) { successAction(result) }
			return JSON.parse(result);
		}).catch(error => {
			return errorAction ? errorAction(error) : error
		});
};

export const get = (url: string, params?: any) => {
	const type = lodash.get(params, 'type', '');
	const token = lodash.get(params, 'token', null);
	const successAction = lodash.get(params, 'successAction', null);
	const errorAction = lodash.get(params, 'errorAction', null);

	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Cache-Control', 'no-cache');
	if (token) {
		headers.append('Authorization', `Bearer ${token}`);
	}
	let controller = new AbortController();
	setTimeout(() => controller.abort(), 15000);

	return fetch(`${type === 'news' ? NEWS_API : API_URL}/${url}`, {
		method: 'GET',
		headers,
		signal: controller.signal
	})
		.then((response) => response.text())
		.then((result) => {
			if (successAction !== null) { successAction(result) }
			return JSON.parse(result);
		}).catch(error => {
			return errorAction !== null ? errorAction(error) : 'error'
		});
};

export const put = (url: string, params: any = {}) => {
	const { errorAction, token } = params;
	const body = lodash.get(params, 'body', {});
	const successAction = lodash.get(params, 'successAction', null);

	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Cache-Control', 'no-cache');
	if (token) {
		headers.append('Authorization', `Bearer ${token}`);
	}
	let controller = new AbortController();
	setTimeout(() => controller.abort(), 15000);

	return fetch(`${API_URL}/${url}`, {
		method: 'PUT',
		headers,
		body: JSON.stringify(body),
		signal: controller.signal
	})
		.then((response) => response.text())
		.then((result) => {
			if (successAction !== null) { successAction(result) }
			return JSON.parse(result);
		}).catch(error => {
			return errorAction ? errorAction(error) : error
		});
};
