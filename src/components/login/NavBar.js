import { useNavigate, Link } from 'react-router-dom';
import Search from '../pages/other/Search';
import pochiLogo from '../../images/pochilogoimg.png';

function NavBar({ setUser, initialUser, allResults, lang, setLang, baseURL }) {
	// ******* VARIABLES *******
	let navigate = useNavigate();
	// Check if user is logged in using localStorage key that we saved at log in
	const loggedInLocalStorage = localStorage.getItem('loggedIn');

	// ******* FUNCTIONS *******
	// Log Out: Clear local storage data & navigate user to homepage
	function handleLogOut(e) {
		e.preventDefault();
		setUser(initialUser);
		localStorage.clear();
		navigate('/');
	}

	// ******* RETURN *******
	return (
		<nav className='nav'>
			{lang ? (
				<div className='flex'>
					{/* Links that show regardless of logged status */}
					<Link to='/'>
						<button className='nav-butt'>Home</button>
					</Link>
					<Link to='/about'>
						<button className='nav-butt'>About</button>
					</Link>
					<Link to='/places'>
						<button className='nav-butt'>Places</button>
					</Link>
					<Link to='/things'>
						<button className='nav-butt'>Things</button>
					</Link>
					{/* Requires logged in status */}
					{/* {login ? ( */}
					{loggedInLocalStorage ? (
						<div className='flex'>
							<div className='nav-butt1'>
								<Link to='/user-rec-form'>
									<button className='nav-butt'>Add a Recommendation</button>
								</Link>
							</div>
							<div className='nav-butt2'>
								<Link to='/user-recs'>
									<button className='nav-butt'>Your Page</button>
								</Link>
							</div>
							<div className='nav-butt3'>
								<Link to='' onClick={handleLogOut}>
									<button className='nav-butt'>Log Out</button>
								</Link>
							</div>
						</div>
					) : (
						// Show below if not logged in
						<div>
							<Link to='/auth'>
								<button className='nav-butt'>Log In/Sign Up</button>
							</Link>
						</div>
					)}
					<img className='logo' src={pochiLogo} alt='pochi-logo-img' />
					<button className='nav-butt' onClick={() => setLang(true)}>
						🇺🇸EN
					</button>
					<button className='日本 nav-butt' onClick={() => setLang(false)}>
						🇯🇵日本
					</button>
				</div>
			) : (
				<div className='flex'>
					{/* Links that show regardless of logged status */}
					<Link to='/'>
						<button className='日本 nav-butt'>ホーム</button>
					</Link>
					<Link to='/about'>
						<button className='日本 nav-butt'>アバウト</button>
					</Link>
					<Link to='/places'>
						<button className='日本 nav-butt'>場所</button>
					</Link>
					<Link to='/things'>
						<button className='日本 nav-butt'>もの</button>
					</Link>
					{/* Requires logged in status */}
					{loggedInLocalStorage ? (
						<div className='flex'>
							<div className='nav-butt1'>
								<Link to='/user-rec-form'>
									<button className='日本 nav-butt'>おすすめを追加</button>
								</Link>
							</div>
							<div className='nav-butt2'>
								<Link to='/user-recs'>
									<button className='日本 nav-butt'>ユーザーページ</button>
								</Link>
							</div>
							<div className='nav-butt3'>
								<Link to='' onClick={handleLogOut}>
									<button className='日本 nav-butt'>ログアウト</button>
								</Link>
							</div>
						</div>
					) : (
						// Show below if not logged in
						<div>
							<Link to='/auth'>
								<button className='日本 nav-butt'>ログイン/サインアップ</button>
							</Link>
						</div>
					)}
					<img className='logo' src={pochiLogo} alt='pochi-logo-img' />
					<button className='nav-butt' onClick={() => setLang(true)}>
						🇺🇸EN
					</button>
					<button className='日本 nav-butt' onClick={() => setLang(false)}>
						🇯🇵日本
					</button>
				</div>
			)}
			<br />
			<Search allResults={allResults} lang={lang} baseURL={baseURL} />
		</nav>
	);
}

export default NavBar;
