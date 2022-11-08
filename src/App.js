import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import MainResults from './components/pages/MainResults';
import UserRecs from './components/pages/UserRecs';
import SearchResults from './components/pages/SearchResults';

function App() {
	const [token, setToken] = useState(localStorage.getItem('JWT') || '');
	// console.log(token)
	return (
		<div className='App'>
			<Header token={token} setToken={setToken} />
			<Routes>
				<Route path='/' element={<MainResults />} />
				<Route path='/user-recs' element={<UserRecs />} />
				<Route path='/search-results' element={<SearchResults />} />
			</Routes>
		</div>
	);
}

export default App;
