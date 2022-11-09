import { Link } from 'react-router-dom';

function NavLoggedOut(props) {
	return (
		<div>
			<Link to='/auth'>Log-in</Link>
		</div>
	);
}

export default NavLoggedOut;
