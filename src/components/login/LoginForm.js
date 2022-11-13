import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setToken, user, setUser, setJWT, lang }) {
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		await setUser(user);
		try {
			// update to heroku later
			const url = 'http://localhost:8000/api/users/signin';
			// const url = 'https://pochi-japan.herokuapp.com/api/users/signin';
			const res = await axios.post(url, user);
			console.log('Login Response: ', res);
			console.log('res.data.token Response:', res.data.token);
			console.log('user: ', user);
			//setJWT is not working
			setJWT(res.data.token);

			localStorage.setItem('token', res.data.token);
			localStorage.setItem('loginEmail', user.email);
			if (res.data.token == null) {
				setInvalidEmail(true);
			} else if (res.data.token != null) {
				setToken(true);
				navigate('/');
			}
		} catch (err) {
			setError('Login failed. Try Again.');
		}
	};

	return (
		<div>
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
									value={user.email}
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
									value={user.password}
									onChange={handleChange}
									required
								/>
								{invalidEmail ? (
									<div>Username or password is incorrect. </div>
								) : (
									''
								)}
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
									value={user.email}
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
									value={user.password}
									onChange={handleChange}
									required
								/>
								{invalidEmail ? (
									<div>Username or password is incorrect. </div>
								) : (
									''
								)}
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
