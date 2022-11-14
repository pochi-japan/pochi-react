import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../utilities/ApiFunctions';

function LoginForm({ user, setUser, lang, setToken, setLogin }) {
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

	// console.log('creds', credentials);

	function handleSubmit(e) {
		e.preventDefault();
		signIn(credentials)
			.then((res) => {
				localStorage.setItem('token', res.token);
				localStorage.setItem('email', res.email);
				console.log('res', res);
				// console.log('res.data', res.data);
				// console.log('res.data.token', res.data.token);
				// console.log('user: ', user);
				setToken(res.token);
				setLogin(true);
				console.log('localStorage', localStorage);
				navigate('/');
			})
			.catch((err) => setError('Login failed. Try Again.'));
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
