import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import MainResults from './components/pages/MainResults';
import UserRecs from './components/pages/UserRecs';
import SearchResults from './components/pages/SearchResults';
import NavBar from './components/login/NavBar';
import AuthPage from './components/login/AuthPage';
import { getUser } from './utilities/UsersService';

function App() {
	//Default States
	const defaultRegister = {
		email: '',
		password: '',
	};

	const defaultUser = {
		email: '',
		password: '',
	};

	// STATES
	// If a user is signed in, use the token that's saved in localStorage (true/false)
	const [token, setToken] = useState(localStorage.getItem('token') || false);

	// Signing up
	const [register, setRegister] = useState(defaultRegister);

	// Logging in - when user logs in, assign a token. JWT is the token value
	const [user, setUser] = useState(defaultUser);
	const [JWT, setJWT] = useState('');

	return (
		<div className='App'>
			<NavBar token={token} setToken={setToken} />
			<Routes>
				<Route path='/' element={<MainResults />} />
				<Route
					path='/user-recs'
					element={
						<UserRecs
							user={user}
							setUser={setUser}
							token={token}
							setToken={setToken}
							JWT={JWT}
							setJWT={setJWT}
						/>
					}
				/>
				<Route path='/search-results' element={<SearchResults />} />
				<Route
					path='/auth'
					element={
						<AuthPage
							token={token}
							setToken={setToken}
							user={user}
							setUser={setUser}
							JWT={JWT}
							setJWT={setJWT}
							register={register}
							setRegister={setRegister}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
