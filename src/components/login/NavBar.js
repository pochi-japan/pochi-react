import { useNavigate, Link } from 'react-router-dom';
import Search from '../pages/other/Search';
import { useState } from 'react';
import pochiLogo from '../../images/pochilogoimg.png';

function NavBar({
	token,
	setToken,
	JWT,
	searchString,
	setSearchString,
	handleSubmit,
	handleChange,
	user,
	setUser,
	defaultUser,
	handleSearch,
	handleFilter,
	// filterResults,
	searchShow,
	allResults,
	searchTerm,
	showRegister,
	setShowRegister,
	lang,
	setLang,
}) {
	let navigate = useNavigate();

	// Log Out
	function handleLogOut(e) {
		e.preventDefault();
		setToken(false); //can be null as well?
		setUser(defaultUser);
		localStorage.clear();
		navigate('/');
	}

	return (
		<nav className='nav'>
			<div className='flex'>
				{/* Links that show regardless of logged status */}
				<Link to='/'>
					<button>Home</button>
				</Link>
				{/* Requires logged in status */}
				{token ? (
					<div className='flex'>
						<div className='nav-butt1'>
							<Link to='/user-rec-form'>
								<button>Add a Recommendation</button>
							</Link>
						</div>
						<div className='nav-butt2'>
							<Link to='/user-recs'>
								<button>Your Page</button>
							</Link>
						</div>
						<div className='nav-butt3'>
							<Link to='' onClick={handleLogOut}>
								<button>Log Out</button>
							</Link>
						</div>
					</div>
				) : (
					// Show below if not logged in
					<div>
						<button onClick={() => setShowRegister(!showRegister)}>
							{showRegister ? 'Log In' : 'Sign Up'}
						</button>
						<Link to='/auth'>
							<button>Log In</button>
						</Link>
					</div>
				)}
				<img className='logo' src={pochiLogo} alt='pochi-logo-img' />
				<button onClick={() => setLang(true)}>🇺🇸EN</button>
				<button className='日本' onClick={() => setLang(false)}>
					🇯🇵日本
				</button>
			</div>
			<br />
			<Search
				searchString={searchString}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleFilter={handleFilter}
				allResults={allResults}
			/>
		</nav>
	);
}

export default NavBar;
