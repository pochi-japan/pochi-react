import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/UsersService';

export default function LoginForm({ setUser }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	const navigate = useNavigate();

	function handleChange(e) {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
		setError('');
	}

	async function handleSubmit(e) {
		// Prevent form from being submitted to the server
		e.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
			// navigate('/');
			console.log('userrrrrrrrr', user);
			console.log('credentialsssss', credentials);
		} catch {
			setError('Log In Failed - Try Again');
		}
	}

	return (
		<div>
			<div className='form-container' onSubmit={handleSubmit}>
				<form autoComplete='off'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='text'
						name='email'
						value={credentials.email}
						onChange={handleChange}
						required
					/>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
						required
					/>
					<button type='submit'>LOG IN</button>
				</form>
			</div>
			<p className='error-message'>&nbsp;{error}</p>
		</div>
	);
}
