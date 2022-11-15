import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../utilities/ApiFunctions';

function LoginForm({ setUser, lang, setToken }) {
	// ******* VARIABLES *******
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	// ******* STATES *******
	const [error, setError] = useState('');

	function handleChange(e) {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
		setError('');
	}

	// ******* FUNCTIONS *******
	function handleSubmit(e) {
		e.preventDefault();
		signIn(credentials)
			.then((res) => {
				localStorage.setItem('token', res.token);
				localStorage.setItem('loggedIn', true);
				localStorage.setItem('email', res.email);
				setToken(res.token);
				setUser(credentials);
				navigate('/');
			})
			.catch((err) =>
				setError(
					<div className='日本'>
						{lang
							? 'Login credentials failed. Try Again.'
							: 'ログインに失敗しました。もう一度入力してください。'}
					</div>
				)
			);
	}

	// ******* RETURN *******
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
