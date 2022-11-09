import { Link, useNavigate } from 'react-router-dom';

function NavBar({ token, setToken }) {
	let navigate = useNavigate();

	function handleLogOut(e) {
		e.preventDefault();
		setToken(false); //can be null as well?
		localStorage.clear();
		navigate('/');
	}

	return (
		<nav>
			<ul>
				{/* Links that show regardless of logged status */}
				<li>
					<Link to='/'>Home</Link>
				</li>

				{/* Requires logged in status */}
				{token ? (
					(
						<li>
							<Link to='/user-recs'>Your Page</Link>
						</li>
					) && (
						<li>
							<Link to='' onClick={handleLogOut}>
								Log Out
							</Link>
						</li>
					)
				) : (
					// Show below if not logged in
					<li>
						<Link to='/auth'>Log-in</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default NavBar;
