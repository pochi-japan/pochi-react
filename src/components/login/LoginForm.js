import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/UsersService';

function LoginForm({ user, setUser, lang, token, setToken, setJWT }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	function handleChange(e) {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
		setError('');
	}

	console.log('creds', credentials);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	await setCredentials(credentials);
	// 	try {
	// 		// update to heroku later
	// 		const url = 'http://localhost:8000/api/users/signin';
	// 		// const url = 'https://pochi-japan.herokuapp.com/api/users/signin';
	// 		const res = await axios.post(url, usersService.login(credentials));
	// 		console.log('res: ', res);
	// 		console.log('res.data.token Response:', res.data.token);
	// 		setUser(res);
	// 		if (res.data.token != null) {
	// 			setToken(true);
	// 			navigate('/');
	// 		}
	// 	} catch (err) {
	// 		setError('Login failed. Try Again.');
	// 		console.log(err);
	// 	}
	// };

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
			console.log('user: ', user);
			navigate('/');
		} catch (err) {
			setError(err);
		}
	}

	return (
		<div>
			{/* Aria-live is for accessibility (screen readers) */}
			{/* <p
				ref={errRef}
				className={errMsg ? 'errmsg' : 'offscreen'}
				aria-live='assertive'>
				{errMsg}
			</p> */}
			{lang ? (
				<div>
					<div onSubmit={handleSubmit}>
						<form className='login-form' autoComplete='off'>
							<div className='container'>
								<label htmlFor='email'>Email:</label>
								<br />
								<input
									autoFocus
									id='email'
									type='text'
									name='email'
									value={credentials.email}
									onChange={handleChange}
									required
								/>
								<br />
								<label htmlFor='password'>Password:</label>
								<br />
								<input
									id='password'
									type='password'
									name='password'
									value={credentials.password}
									onChange={handleChange}
									required
								/>
								<br />
								<button className='submit' type='submit'>
									LOG IN
								</button>
							</div>
						</form>
					</div>
					<p className='error-message'>&nbsp;{error}</p>
				</div>
			) : (
				<div>
					<div onSubmit={handleSubmit}>
						<form className='login-form' autoComplete='off'>
							<div className='container'>
								<label className='日本' htmlFor='email'>
									Eメール:
								</label>
								<br />
								<input
									autoFocus
									id='email'
									type='text'
									name='email'
									value={credentials.email}
									onChange={handleChange}
									required
								/>
								<br />
								<label className='日本' htmlFor='password'>
									パスワード:
								</label>
								<br />
								<input
									id='password'
									type='password'
									name='password'
									value={credentials.password}
									onChange={handleChange}
									required
								/>
								<br />
								<button className='submit 日本' type='submit'>
									ログイン
								</button>
							</div>
						</form>
					</div>
					<p className='error-message'>&nbsp;{error}</p>
				</div>
			)}
		</div>
	);
}

export default LoginForm;
