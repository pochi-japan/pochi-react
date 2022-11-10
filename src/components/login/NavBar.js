import { useNavigate, Link } from 'react-router-dom';
import Search from '../Search';

function NavBar({ token, setToken, user, JWT }) {
	let navigate = useNavigate();

	function handleLogOut(e) {
		e.preventDefault();
		setToken(false); //can be null as well?
		localStorage.clear();
		navigate('/');
	}

	return (
		<nav>
			<div>
				{/* Links that show regardless of logged status */}
				<Link to='/'>Home</Link>
				<Search />
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
