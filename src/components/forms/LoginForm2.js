import { useState } from 'react';
import { signIn } from '../../functions/fetch';

const initialState = {
	email: '',
	password: '',
};

function LoginForm({ setModal, setToken }) {
	const [formValues, setFormValues] = useState(initialState);

	function handleChange(e) {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		signIn(formValues)
			.then((res) => {
				localStorage.setItem('JWT', res.token);
				localStorage.setItem('email', res.email);
				localStorage.setItem('userId', res.userId);
				setToken(res.token);
				setModal(false);
			})
			.catch((err) => console.error(err.response.data));
	}

	return (
		<div className='screenDimmer'>
			<div className='modal loginModal'>
				<button className='closeFormBtn' onClick={() => setModal(false)}>
					X
				</button>
				<form className='loginForm' action='' onSubmit={handleSubmit}>
					<label htmlFor='email'>E-mail</label>
					<input
						type='text'
						name='email'
						id='email'
						required={true}
						value={formValues.email}
						onChange={handleChange}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						value={formValues.password}
						onChange={handleChange}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
