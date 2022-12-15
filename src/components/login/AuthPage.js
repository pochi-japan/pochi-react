import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function AuthPage({
	setToken,
	setUser,
	showRegister,
	setShowRegister,
	lang,
	baseURL,
}) {
	// ******* RETURN *******
	return (
		<main>
			{lang ? (
				<button onClick={() => setShowRegister(!showRegister)}>
					{showRegister ? 'Log In' : 'Sign Up'}
				</button>
			) : (
				<button className='日本' onClick={() => setShowRegister(!showRegister)}>
					{showRegister ? 'ログイン' : 'サインアップ'}
				</button>
			)}
			{showRegister ? (
				<RegisterForm lang={lang} baseURL={baseURL} />
			) : (
				<LoginForm setToken={setToken} setUser={setUser} lang={lang} />
			)}
		</main>
	);
}

export default AuthPage;
