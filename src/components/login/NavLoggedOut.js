import { Link } from 'react-router-dom';

function NavLoggedOut() {
	return (
		<div>
			<Link to='/auth'>Log In</Link>
		</div>
	);
}

export default NavLoggedOut;
