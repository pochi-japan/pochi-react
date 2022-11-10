import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from './utilities/UsersService';
import MainResults from './components/pages/MainResults';
import UserRecs from './components/pages/UserRecs';
import SearchResults from './components/pages/SearchResults';
import NavBar from './components/login/NavBar';
import AuthPage from './components/login/AuthPage';
import UserRecForm from './components/pages/UserRecForm';
import LoginSuccess from './components/pages/LoginSuccess';
import RecDetail from './components/pages/RecDetail';

function App() {
	const defaultUser = {
		email: '',
		password: '',
	};

	let navigate = useNavigate();

	// STATES
	// If a user is signed in, use the token that's saved in localStorage (true/false)
	const [token, setToken] = useState(localStorage.getItem('token') || false);
	console.log('localStorage token:', localStorage.getItem('token'));

	// Search Bar
	const [searchString, setSearchString] = useState('');

	// Logging in - when user logs in, assign a token. JWT is the token value
	const [user, setUser] = useState(defaultUser);
	const [JWT, setJWT] = useState('');

	// Search Bar
	const handleChange = (e) => {
		setSearchString(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/results/:${searchString}`);
	};

	return (
		<div className='App'>
			<NavBar
				token={token}
				setToken={setToken}
				user={user}
				setUser={setUser}
				defaultUser={defaultUser}
				JWT={JWT}
				setSearchString={setSearchString}
			/>
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
				<Route
					path='/results'
					element={
						<SearchResults
							searchString={searchString}
							setSearchString={setSearchString}
						/>
					}
				/>
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
						/>
					}
				/>
				<Route path='/detail' element={<RecDetail />}></Route>
				<Route
					path='/user-rec-form'
					element={<UserRecForm user={user} JWT={JWT} token={token} />}
				/>
				<Route path='/success' element={<LoginSuccess />} />
			</Routes>
		</div>
	);
}

export default App;
