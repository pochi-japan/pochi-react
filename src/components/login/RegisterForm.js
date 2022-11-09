import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

//new code

function RegisterForm({ register, setRegister }) {
	const navigate = useNavigate();
	const [duplicateUser, setDuplicateUser] = useState(false);
	const [error, setError] = useState('');
	const disable = register.password !== register.confirm;

	function handleChange(e) {
		setRegister({
			...register,
			[e.target.id]: e.target.value,
		});
		console.log(register);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await setRegister(register);

		try {
			const url = 'http://localhost:8000/api/users/signup';
			// const url = 'https://pochi-japan.herokuapp.com/api/users/signup';
			const res = await axios.post(url, register);
			console.log('Register Response:', res);

			if (res.status === 200) {
				setDuplicateUser(false);
				navigate('/auth');
			}
		} catch (err) {
			setDuplicateUser(true);
			setError('Registration Failed. Please try again.');
		}
	};

	return (
		<div>
			<div className='form-container'>
				<form autoComplete='off' onSubmit={handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						type='text'
						name='name'
						value={register.name}
						onChange={handleChange}
						required
					/>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						value={register.email}
						onChange={handleChange}
						required
					/>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						value={register.password}
						onChange={handleChange}
						required
					/>
					<label htmlFor='confirm'>Confirm Password</label>
					<input
						id='confirm'
						type='password'
						name='confirm'
						value={register.confirm}
						onChange={handleChange}
						required
					/>
					{duplicateUser ? <div>Username unavailable</div> : ''}
					<button type='submit' disabled={disable}>
						Sign Up
					</button>
				</form>
			</div>
			<p className='error-message'>
				{''}
				{error}
			</p>
		</div>
	);
}

export default RegisterForm;

// export default class SignUpForm extends Component {
// 	state = {
// 		name: '',
// 		email: '',
// 		password: '',
// 		confirm: '',
// 		error: '',
// 	};

// 	handleChange = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.value,
// 			error: '',
// 		});
// 	};

// 	handleSubmit = async (e) => {
// 		// Prevent form from being submitted to the server
// 		e.preventDefault();
// 		try {
// 			//Creating a duplicate of the state and deleting error and confirm properties
// 			const formData = { ...this.state };
// 			delete formData.error;
// 			delete formData.confirm;
// 			// The promise returned by the signUp service method
// 			// will resolve to the user object included in the
// 			// payload of the JSON Web Token (JWT)
// 			const user = await signUp(formData);
// 			// Baby step!
// 			// this.props.setUser(user);
// 			console.log(user);
// 			const navigate = useNavigate();
// 			navigate('/');
// 		} catch {
// 			// An error occurred
// 			this.setState({ error: 'Sign Up Failed - Try Again' });
// 		}
// 	};

// 	render() {
// 		const disable = this.state.password !== this.state.confirm;
// 		return (
// 			<div>
// 				<div className='form-container'>
// 					<form autoComplete='off' onSubmit={this.handleSubmit}>
// 						<label htmlFor='name'>Name</label>
// 						<input
// 							id='name'
// 							type='text'
// 							name='name'
// 							value={this.state.name}
// 							onChange={this.handleChange}
// 							required
// 						/>
// 						<label htmlFor='email'>Email</label>
// 						<input
// 							id='email'
// 							type='email'
// 							name='email'
// 							value={this.state.email}
// 							onChange={this.handleChange}
// 							required
// 						/>
// 						<label htmlFor='password'>Password</label>
// 						<input
// 							id='password'
// 							type='password'
// 							name='password'
// 							value={this.state.password}
// 							onChange={this.handleChange}
// 							required
// 						/>
// 						<label htmlFor='confirm'>Confirm Password</label>
// 						<input
// 							id='confirm'
// 							type='password'
// 							name='confirm'
// 							value={this.state.confirm}
// 							onChange={this.handleChange}
// 							required
// 						/>
// 						<button type='submit' disabled={disable}>
// 							SIGN UP
// 						</button>
// 					</form>
// 				</div>
// 				<p className='error-message'>&nbsp;{this.state.error}</p>
// 			</div>
// 		);
// 	}
// }
