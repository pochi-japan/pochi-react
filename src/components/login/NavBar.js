import { useNavigate, Link } from 'react-router-dom';
import NavLoggedIn from './NavLoggedIn';
import NavLoggedOut from './NavLoggedOut';
import Search from '../Search';

function NavBar({ token, setToken, user, JWT }) {
	// let navigate = useNavigate();

	// function handleLogOut(e) {
	// 	e.preventDefault();
	// 	setToken(false); //can be null as well?
	// 	localStorage.clear();
	// 	navigate('/');
	// }

	return (
		<nav>
			<div>
				{/* Links that show regardless of logged status */}
				<Link to='/'>Home</Link>
				<Search />
				{/* Requires logged in status */}
				{token ? (
					<div>
						<NavLoggedIn setToken={setToken} />
						<Link to='/user-rec-form'>Add a Recommendation</Link>
					</div>
				) : (
					// Show below if not logged in
					<NavLoggedOut />
				)}
			</div>
		</nav>
	);
}

export default NavBar;
