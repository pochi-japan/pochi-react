import { Link, useNavigate } from 'react-router-dom';

function NavLoggedIn({ setToken }) {
	let navigate = useNavigate();

	function handleLogOut(e) {
		e.preventDefault();
		setToken(false); //can be null as well?
		localStorage.clear();
		navigate('/');
	}

	return (
		<div>
			<Link to='/user-recs'>Your Page</Link>
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</div>
	);
}

export default NavLoggedIn;
