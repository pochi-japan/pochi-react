import axios from 'axios';
const BASEURL = 'http://localhost:8000/api';
// 'https://pochi-japan.herokuapp.com/api';

export async function signIn(loginData) {
	const url = 'http://localhost:8000/api/users/signin';
	try {
		const res = await axios.post(url, loginData);
		console.log('res from signIn function', res);
		// console.log('resdata', res.data);
		return res.data;
	} catch (err) {
		throw err;
	}
}
