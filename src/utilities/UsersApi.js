import sendRequest from './SendRequest';
const BASE_URL = 'http://localhost:8000/api/users';

export function signUp(userData) {
	return sendRequest(`${BASE_URL}/signup`, 'POST', userData);
}

export function login(credentials) {
	return sendRequest(`${BASE_URL}/signin`, 'POST', credentials);
}
