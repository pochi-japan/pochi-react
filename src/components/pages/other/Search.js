import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ allResults, lang }) {
	// ******* VARIABLES *******
	const navigate = useNavigate();

	// ******* STATE *******
	const [searchString, setSearchString] = useState('');

	// ******* FUNCTIONS *******
	const handleChange = (e) => {
		setSearchString(e.target.value);
	};

	const handleSubmit = (searchTerm) => {
		setSearchString(searchTerm);
		navigate(`/results/?q=${searchTerm}&description=${searchTerm}`);
	};

	// Searching only works once because I believe searchTerm is not changing to an empty state, but I cannot do that here as the useEffect is in a different logic (page navigates). I will work on fixing this.

	// ******* RETURN *******
	return (
		<div>
			<input type='text' value={searchString} onChange={handleChange} />
			{lang ? (
				<button onClick={() => handleSubmit(searchString)}>Search</button>
			) : (
				<button className='日本' onClick={() => handleSubmit(searchString)}>
					検索
				</button>
			)}
			<div className='search-dropdown'>
				{allResults
					.filter((rec) => {
						let searchTerm = searchString.toLowerCase();
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
