import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import MainResults from './components/pages/MainResults';
import UserRecs from './components/pages/UserRecs';
import SearchResults from './components/pages/SearchResults';
import NavBar from './components/login/NavBar';
import AuthPage from './components/login/AuthPage';

function App() {
	const [token, setToken] = useState(localStorage.getItem('JWT') || '');
	// console.log(token)

	const [user, setUser] = useState(null);
	return (
		<div className='App'>
			{/* <Header token={token} setToken={setToken} /> */}
			<NavBar user={user} />
			<Routes>
				{/* <Route path='/' element={<MainResults />} /> */}
				<Route path='/user-recs' element={<UserRecs />} />
				<Route path='/search-results' element={<SearchResults />} />
				<Route path='/auth' element={<AuthPage/>} />
			</Routes>
		</div>
	);
}

export default App;
