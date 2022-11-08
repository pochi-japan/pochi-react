import { Component } from 'react';
// import { signUp } from '../../utilities/UsersService';
import { signUp } from '../../utilities/UsersApi';

export default class SignUpForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirm: '',
		error: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			error: '',
		});
	};

	handleSubmit = async (e) => {
		// Prevent form from being submitted to the server
		e.preventDefault();
		try {
			//Creating a duplicate of the state and deleting error and confirm properties
			const formData = { ...this.state };
			delete formData.error;
			delete formData.confirm;
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await signUp(formData);
			// Baby step!
			console.log(user);
		} catch {
			// An error occurred
			this.setState({ error: 'Sign Up Failed - Try Again' });
		}
	};

	render() {
		const disable = this.state.password !== this.state.confirm;
		return (
			<div>
				<div className='form-container'>
					<form autoComplete='off' onSubmit={this.handleSubmit}>
						<label>Name</label>
						<input
							type='text'
							name='name'
							value={this.state.name}
							onChange={this.handleChange}
							required
						/>
						<label>Email</label>
						<input
							type='email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
						<label>Password</label>
						<input
							type='password'
							name='password'
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
						<label>Confirm Password</label>
						<input
							type='password'
							name='confirm'
							value={this.state.confirm}
							onChange={this.handleChange}
							required
						/>
						<button type='submit' disabled={disable}>
							SIGN UP
						</button>
					</form>
				</div>
				<p className='error-message'>&nbsp;{this.state.error}</p>
			</div>
		);
	}
}
