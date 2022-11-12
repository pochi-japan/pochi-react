import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainResults from './components/pages/MainResults';
import UserRecs from './components/pages/UserRecs';
import SearchResults from './components/pages/SearchResults';
import NavBar from './components/login/NavBar';
import AuthPage from './components/login/AuthPage';
import UserRecForm from './components/pages/forms/UserRecForm';
import LoginSuccess from './components/pages/LoginSuccess';
import RecDetail from './components/pages/RecDetail';

function App() {
	const defaultUser = {
		email: '',
		password: '',
	};

	// STATES
	// If a user is signed in, use the token that's saved in localStorage (true/false)
	const [token, setToken] = useState(localStorage.getItem('token') || false);
	// console.log('localStorage token:', localStorage.getItem('token'));
	const [error, setError] = useState(null);

	const [showRegister, setShowRegister] = useState(false);

	// Search Bar
	const [allResults, setAllResults] = useState([]);
	// const [searchString, setSearchString] = useState('');

	// Logging in - when user logs in, assign a token. JWT is the token value
	const [user, setUser] = useState(defaultUser);
	const [JWT, setJWT] = useState('');

	const [lang, setLang] = useState(true);

	let navigate = useNavigate();

	//From MainResults
	const [randomResults, setRandomResults] = useState([]);

	// Function to shuffle the results
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	// Read results from API
	useEffect(() => {
		//update to heroku later
		axios
			.get(`http://localhost:8000/api`)
			.then((res) => {
				setAllResults(res.data);
				const data = shuffle(res.data);
				//call the function to randomize the data
				setRandomResults(res.data);
				// console.log('useEffect res.data', res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	// const handleChange = (e) => {
	// 	setSearchString(e.target.value);
	// };

	// const handleSubmit = (searchTerm) => {
	// 	// Fetches the searched Result
	// 	setSearchString(searchTerm);
	// 	console.log('search term:', searchTerm);
	// 	// Navigates to SearchResults.js
	// 	navigate(`/results/:${searchString}`);
	// };

	return (
		<div className='App'>
			<NavBar
				showRegister={showRegister}
				setShowRegister={setShowRegister}
				token={token}
				setToken={setToken}
				user={user}
				setUser={setUser}
				defaultUser={defaultUser}
				JWT={JWT}
				// searchString={searchString}
				// setSearchString={setSearchString}
				// handleChange={handleChange}
				// handleSubmit={handleSubmit}
				allResults={allResults}
				lang={lang}
				setLang={setLang}
			/>
			<Routes>
				<Route
					path='/'
					element={
						<MainResults
							randomResults={randomResults}
							error={error}
							lang={lang}
						/>
					}
				/>
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
							lang={lang}
							allResults={allResults}
						/>
					}
				/>
				<Route
					path='/results/:searchString'
					element={
						<SearchResults
						// allResults={allResults}
						// searchString={searchString}
						// setSearchString={setSearchString}
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
							showRegister={showRegister}
							setShowRegister={setShowRegister}
							lang={lang}
						/>
					}
				/>
				<Route path='/detail/:id' element={<RecDetail />}></Route>
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
