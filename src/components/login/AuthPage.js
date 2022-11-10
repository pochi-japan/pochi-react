import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useState } from 'react';

function AuthPage({
	token,
	setToken,
	user,
	setUser,
	JWT,
	setJWT,
	register,
	setRegister,
}) {
	const [showRegister, setShowRegister] = useState(false);
	return (
		<main>
			<h1>AuthPage</h1>
			<button onClick={() => setShowRegister(!showRegister)}>
				{showRegister ? 'Log In' : 'Sign Up'}
			</button>
			{showRegister ? (
				<RegisterForm register={register} setRegister={setRegister} />
			) : (
				<LoginForm
					token={token}
					setToken={setToken}
					user={user}
					setUser={setUser}
					JWT={JWT}
					setJWT={setJWT}
				/>
			)}
		</main>
	);
}

export default AuthPage;
