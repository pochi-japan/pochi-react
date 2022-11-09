import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// export default function LoginForm({ setUser }) {
// const [credentials, setCredentials] = useState({
// 	email: '',
// 	password: '',
// });
// const [error, setError] = useState('');

// 	const navigate = useNavigate();

// 	function handleChange(e) {
// 		setCredentials({ ...credentials, [e.target.name]: e.target.value });
// 		setError('');
// 	}

// async function handleSubmit(e) {
// 	// Prevent form from being submitted to the server
// 	e.preventDefault();
// 	try {
// 		// The promise returned by the signUp service method
// 		// will resolve to the user object included in the
// 		// payload of the JSON Web Token (JWT)
// 		const user = await usersService.login(credentials);
// 		setUser(user);
// 		// navigate('/');
// 		console.log('userrrrrrrrr', user);
// 		console.log('credentialsssss', credentials);
// 	} catch {
// 		setError('Log In Failed - Try Again');
// 	}
// }

function LoginForm({ token, setToken, user, setUser, JWT, setJWT }) {
	// const [credentials, setCredentials] = useState({
	// 	email: '',
	// 	password: '',
	// });
	const navigate = useNavigate();
	const [invalidEmail, setInvalidEmail] = useState(false);
	const [error, setError] = useState('');

	function handleChange(e) {
		setUser({
			...user,
			[e.target.id]: e.target.value,
		});
	}

	//constant version with credentials
	// const handleSubmit = async (e) => {
	// 	// Prevent form from being submitted to the server
	// 	e.preventDefault();
	// 	try {
	// 		// The promise returned by the signUp service method
	// 		// will resolve to the user object included in the
	// 		// payload of the JSON Web Token (JWT)
	// 		const user = await usersService.login(credentials);
	// 		setUser(user);
	// 		// navigate('/');
	// 		console.log('userrrrrrrrr', user);
	// 		console.log('credentialsssss', credentials);
	// 	} catch {
	// 		setError('Log In Failed - Try Again');
	// 	}
	// };

	//other version
	const handleSubmit = async (e) => {
		e.preventDefault();
		await setUser(user);
		try {
			// update to heroku later
			const url = 'http://localhost:8000/api/users/signin';
			// const url = 'https://pochi-japan.herokuapp.com/api/users/signin';
			const res = await axios.post(url, user);
			console.log('Login Response: ', res);
			console.log('res.data Response:', res.data);
			console.log('res.data.token Response:', res.data.token);
			console.log('user: ', user);
			// setJWT(res.data.token);
			setJWT(res.data);
			console.log('JWT: ', JWT);

			localStorage.setItem('token', res.data);
			localStorage.setItem('loginEmail', user.email);
			if (res.data == null) {
				setInvalidEmail(true);
			} else if (res.data != null) {
				setToken(true);
				navigate('/');
			}
		} catch (err) {
			setError('Login failed. Try Again.');
		}
	};

	return (
		<div>
			<div className='form-container' onSubmit={handleSubmit}>
				<form autoComplete='off'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='text'
						name='email'
						value={user.email}
						onChange={handleChange}
						required
					/>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						value={user.password}
						onChange={handleChange}
						required
					/>
					{invalidEmail ? <div>Username or password is incorrect. </div> : ''}
					<button type='submit'>LOG IN</button>
				</form>
			</div>
			<p className='error-message'>&nbsp;{error}</p>
		</div>
	);
}

export default LoginForm;
