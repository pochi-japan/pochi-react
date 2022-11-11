import { useNavigate, Link } from 'react-router-dom';
import Search from '../Search';
import { useState } from 'react';

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
		<nav>
			<div>
				{/* Links that show regardless of logged status */}
				<Link to='/'>Home</Link>
				<Search
					searchString={searchString}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleFilter={handleFilter}
				/>
				{/* Requires logged in status */}
				{token ? (
					<div>
						<Link to='/user-rec-form'>Add a Recommendation</Link>
						<p></p>
						<Link to='/user-recs'>Your Page</Link>
						<p></p>
						<Link to='' onClick={handleLogOut}>
							Log Out
						</Link>
					</div>
				) : (
					// Show below if not logged in
					<Link to='/auth'>Log In</Link>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
