import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchResults({ searchString, setSearchString }) {
	const [searchResults, setSearchResults] = useState([]);
	const [error, setError] = useState(null);

	// Read results from API
	useEffect(() => {
		//update to heroku later
		axios
			// Figure out how to get results with the searched text in the name (backend find by?)
			.get(`http://localhost:8000/api`)
			.then((res) => {
				setSearchResults(res.data);
				setError(null);
				// console.log(res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	if (!searchResults.length) {
		return <h2>No Results</h2>;
	}

	return (
		<section>
			Search Results - delete this line later
			{/* Limit random results to 5 images, set fallback image if image is null or gives an invalid image */}
			{searchResults.slice(0, 4).map((res) => {
				return (
					<div key={`${res.name}-card`}>
						<div className='results-img'>
							<Link to={`/detail/:${res._id}`} key={res.name}>
								<h1>{res.name}</h1>
								<br />
								<img
									src={res.picture1}
									onError={(e) =>
										(e.currentTarget.src =
											'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
									}
									alt={res.name}
								/>
							</Link>
						</div>
					</div>
				);
			})}
			{error ? <div>{error}</div> : <div>{''}</div>}
		</section>
	);
}

export default SearchResults;
