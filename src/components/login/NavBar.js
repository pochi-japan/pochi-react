import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/UsersService';

function NavBar({ user, setUser }) {
	function handleLogOut() {
		usersService.logOut();
		setUser(null);
	}

	return (
		<nav>
			{user ? (
				<Link to='/user-recs'>Your Page</Link> && (
					<Link to='' onClick={handleLogOut}>
						Log Out
					</Link>
				)
			) : (
				<Link to='/auth'>Log-in</Link>
			)}
		</nav>
	);
}

export default NavBar;
