import { Link } from 'react-router-dom';

function NavBar({user}) {
	return (
    <div>
        {user ? <Link to='/user-recs'>Your Page</Link> : <Link to='/auth'>Log-in</Link>}
        </div>
    );
}

export default NavBar;
