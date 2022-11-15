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
import ErrorPage from './components/pages/ErrorPage';

function App() {
	// ******* VARIABLE *******
	const initialUser = {
		email: '',
		password: '',
	};

	// ******* STATES *******
	const [user, setUser] = useState(initialUser);

	// If a user is signed in, use the token that's saved in localStorage (true/false)
	const [token, setToken] = useState(localStorage.getItem('token') || false);

	// Showing Registration form or Log in form
	const [showRegister, setShowRegister] = useState(false);

	// Search Bar
	const [allResults, setAllResults] = useState([]);

	// Toggling the language to English or Japanese (for most pages)
	const [lang, setLang] = useState(true);

	// ******* API RESULTS *******

	useEffect(() => {
		//update to heroku later
		axios
			// .get(`http://localhost:8000/api`)
			.get(`https://pochi-japan.herokuapp.com/api`)
			.then((res) => {
				setAllResults(res.data);
			})
			.catch((err) => {
				<div className='日本'>
					{lang ? 'Contents were not found' : 'ページが見つかりませんでした'}
				</div>;
			});
	}, []);

	// ******* RETURN *******

	return (
		<div className='App'>
			<NavBar
				setUser={setUser}
				initialUser={initialUser}
				allResults={allResults}
				token={token}
				lang={lang}
				setLang={setLang}
			/>
			<Routes>
				<Route
					path='/'
					element={<MainResults lang={lang} allResults={allResults} />}
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
							setToken={setToken}
							setUser={setUser}
							showRegister={showRegister}
							setShowRegister={setShowRegister}
							lang={lang}
						/>
					}
				/>
				<Route path='/detail/:id' element={<RecDetail lang={lang} />}></Route>
				<Route
					path='/user-recs'
					element={
						<UserRecList allResults={allResults} lang={lang} token={token} />
					}
				/>
				<Route path='/edit/:id' element={<RecEditForm />}></Route>
				<Route
					path='/user-rec-form'
					element={<UserRecForm token={token} lang={lang} />}
				/>
				<Route path='/success' element={<RegisterSuccess />} />
				{/* Catch all for pages that do not exist */}
				<Route path='*' element={<ErrorPage lang={lang} />}></Route>
			</Routes>
		</div>
	);
}

export default App;
