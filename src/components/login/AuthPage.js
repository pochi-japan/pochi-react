import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { useState } from 'react';

function AuthPage({ setUser }) {
	const [showSignUp, setShowSignUp] = useState(false);
	return (
		<main>
			<h1>AuthPage</h1>
			<button onClick={() => setShowSignUp(!showSignUp)}>
				{showSignUp ? 'Log In' : 'Sign Up'}
			</button>
			{showSignUp ? <SignUpForm /> : <LoginForm setUser={setUser} />}
		</main>
	);
}

export default AuthPage;
