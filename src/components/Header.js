// import React, { useMemo, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import Search from './Search';
// import LoginForm from './forms/LoginForm';
// import RegisterForm from './forms/RegisterForm';

// function Header({ token, setToken }) {
// 	const [openLogin, setOpenLogin] = useState(false);
// 	const [openRegister, setOpenRegister] = useState(false);

// 	// Executes to grab email only when token has changed
// 	const email = useMemo(() => {
// 		if (token) {
// 			return localStorage.getItem('email');
// 		}
// 	}, [token]);

// 	return (
// 		<div className='header'>
// 			<div className='linkContainer'>
// 				<div className='navLinks'>
// 					<NavLink to='/'>
// 						Home
// 					</NavLink>
// 					{email ? (
// 						<>
//                         {/* Link to list of user's recommendations after login & profile (if we have time) */}
// 							<NavLink to='/user-recs'>
// 								Your Page
// 							</NavLink>
// 						</>
// 					) : null}
// 				</div>
// 				<Search />
// 			</div>

// 			{token ? (
// 				<div>
// 					<div className='email'>{email}</div>
// 					<button
// 						className='logoutButton'
// 						onClick={() => {
// 							localStorage.removeItem('JWT');
// 							localStorage.removeItem('email');
// 							localStorage.removeItem('userId');
// 							setToken('');
// 						}}>
// 						Logout
// 					</button>
// 				</div>
// 			) : (
// 				<div>
// 					<button onClick={() => setOpenLogin(true)}>Login</button>
// 					<button onClick={() => setOpenRegister(true)}>Register</button>
// 					{openLogin ? (
// 						<LoginForm setModal={setOpenLogin} setToken={setToken} />
// 					) : null}
// 					{openRegister ? <RegisterForm setModal={setOpenRegister} /> : null}
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export default Header;