import React from 'react';

function Search({ searchString, handleSubmit, handleChange }) {
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				name='searchString'
				type='text'
				placeholder='search a recommendation'
				value={searchString}
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default Search;
