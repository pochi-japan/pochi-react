// import * as usersAPI from './UsersApi';

// export async function login(credentials) {
// 	const token = await usersAPI.login(credentials);
// 	localStorage.setItem('token', token);
// 	return getUser();
// }

// export function logOut() {
// 	localStorage.removeItem('token');
// }

// // export function getToken() {
// // 	// getItem returns null if there's no string
// // 	const token = localStorage.getItem('token');
// // 	if (!token) return null;
// // 	// Obtain the payload of the token
// // 	// console.log(JSON.parse(token));
// // 	const payload = JSON.parse(token);
// // 	console.log('payload', payload);
// // 	// A JWT's exp is expressed in seconds, not milliseconds, so convert
// // 	if (payload.exp < Date.now() / 1000) {
// // 		// Token has expired - remove it from localStorage
// // 		localStorage.removeItem('token');
// // 		return null;
// // 	}
// // 	return token;
// // }

// // export function getUser() {
// // 	const token = getToken();
// // 	console.log('getuser tokennnnnnn', token);
// // 	// If there's a token, return the user in the payload, otherwise return null
// // 	return token ? JSON.parse(token).user : null;
// // }
// // ********************************************************************* //
// // Return the token if valid, otherwise return null
// export function getToken() {
// 	const token = localStorage.getItem('token');
// 	if (!token) return null;
// 	const payload = JSON.parse(atob(token.split('.')[1]));
// 	if (payload.exp < Date.now() / 1000) {
// 		localStorage.removeItem('token');
// 		return null;
// 	}
// 	return token;
// }

// export function getUser() {
// 	const token = getToken();
// 	return token ? JSON.parse(atob(token.split('.')[1])).user : null;
// }
