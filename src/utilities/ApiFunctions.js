import axios from 'axios';

export async function signIn(loginData) {
	const url = 'https://pochi-japan.herokuapp.com/api/users/signin';
	// const url = 'http://localhost:8000/api/users/signin';
	try {
		const res = await axios.post(url, loginData);
		return res.data;
	} catch (err) {
		throw err;
	}
}
