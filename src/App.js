import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainResults from './components/pages/MainResults';
import UserRecList from './components/pages/UserRecList';
import SearchResults from './components/pages/SearchResults';
import NavBar from './components/login/NavBar';
import AuthPage from './components/login/AuthPage';
import UserRecForm from './components/pages/forms/UserRecForm';
import RegisterSuccess from './components/pages/RegisterSuccess';
import RecDetail from './components/pages/RecDetail';
import RecEditForm from './components/pages/forms/RecEditForm';
import PlacesRecList from './components/pages/PlacesRecList';
import ThingsRecList from './components/pages/ThingsRecList';

function App() {
	const initialUser = {
		email: '',
		password: '',
	};
	// STATES
	const [user, setUser] = useState(initialUser);
	// If a user is signed in, use the token that's saved in localStorage (true/false)
	const [token, setToken] = useState(localStorage.getItem('token') || false);
	// console.log('localStorage token:', localStorage.getItem('token'));
	const [error, setError] = useState(null);
	// If Logged in
	const [login, setLogin] = useState(false);

	// Showing Registration form or Log in form
	const [showRegister, setShowRegister] = useState(false);

	// Search Bar
	const [allResults, setAllResults] = useState([]);
	// const [searchString, setSearchString] = useState('');

	// Logging in - when user logs in, assign a token. JWT is the token value

	const [JWT, setJWT] = useState('');

	const [lang, setLang] = useState(true);

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
				shuffle(res.data);
				//call the function to randomize the data
				setRandomResults(res.data);
				// console.log('useEffect res.data', res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	return (
		<div className='App'>
			<NavBar
				token={token}
				setToken={setToken}
				setUser={setUser}
				allResults={allResults}
				lang={lang}
				setLang={setLang}
				setLogin={setLogin}
				login={login}
				initialUser={initialUser}
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
					path='/places'
					element={<PlacesRecList allResults={allResults} lang={lang} />}
				/>
				<Route
					path='/things'
					element={<ThingsRecList allResults={allResults} lang={lang} />}
				/>
				<Route path='/results' element={<SearchResults />} />
				<Route
					path='/auth'
					element={
						<AuthPage
							user={user}
							setUser={setUser}
							token={token}
							setToken={setToken}
							setJWT={setJWT}
							showRegister={showRegister}
							setShowRegister={setShowRegister}
							lang={lang}
							setLogin={setLogin}
						/>
					}
				/>
				<Route path='/detail/:id' element={<RecDetail lang={lang} />}></Route>
				{/* <Route path='*' element={<ErrorPage />}></Route> */}
				<Route
					path='/user-recs'
					element={
						<UserRecList user={user} allResults={allResults} lang={lang} />
					}
				/>
				<Route path='/edit/:id' element={<RecEditForm />}></Route>
				<Route
					path='/user-rec-form'
					element={
						<UserRecForm user={user} token={token} lang={lang} JWT={JWT} />
					}
				/>
				<Route path='/success' element={<RegisterSuccess />} />
			</Routes>
		</div>
	);
}

export default App;
