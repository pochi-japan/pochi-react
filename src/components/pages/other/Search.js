import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({
	// searchString,
	// setSearchString,
	// handleChange,
	// handleSubmit,
	allResults,
}) {
	const [searchString, setSearchString] = useState('');
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setSearchString(e.target.value);
	};

	const handleSubmit = (searchTerm) => {
		// Fetches the searched Result
		setSearchString(searchTerm);
		// console.log('search term:', searchTerm);
		// Navigates to SearchResults.js
		navigate(`/results/?q=${searchTerm}`);
	};

	return (
		<div>
			<input
				type='text'
				value={searchString}
				onChange={handleChange}
				// name='searchString'
				placeholder='search a recommendation'
			/>
			<button onClick={() => handleSubmit(searchString)}>Search</button>
			<div className='search-dropdown'>
				{allResults
					.filter((rec) => {
						{
							// console.log('rec in filter', rec);
						}
						const searchTerm = searchString.toLowerCase();
						const name = rec.name.toLowerCase();
						const description = rec.description.toLowerCase();
						//hashtag is an array so this won't work yet
						// const hashtag = rec.hashtag.toLowerCase();
						return (
							((searchTerm && name.includes(searchTerm)) ||
								description.includes(searchTerm)) &&
							// || (hashtag.includes(searchTerm)
							name !== searchTerm &&
							searchTerm !== ''
						);
					})
					.slice(0, 10)
					.map((rec) => (
						<div
							className='dropdown-row'
							key={rec._id}
							onClick={() => handleSubmit(rec.name)}>
							{rec.name}
						</div>
					))}
			</div>
		</div>
	);
}

export default Search;
