import { useNavigate, Link } from 'react-router-dom';
import Search from '../Search';
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
				<button>
					<Link to='/'>Home</Link>
				</button>
				{/* Requires logged in status */}
				{token ? (
					<div>
						<button>
							<Link to='/user-rec-form'>Add a Recommendation</Link>
						</button>
						<button>
							<Link to='/user-recs'>Your Page</Link>
						</button>
						<button>
							<Link to='' onClick={handleLogOut}>
								Log Out
							</Link>
						</button>
					</div>
				) : (
					// Show below if not logged in
					<button>
						<Link to='/auth'>Log In</Link>
					</button>
				)}
				<img className='logo' src={pochiLogo} alt='pochi-logo-img' />
			</div>
			<br />
			<Search
				searchString={searchString}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleFilter={handleFilter}
			/>
		</nav>
	);
}

export default NavBar;
