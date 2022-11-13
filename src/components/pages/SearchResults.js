import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
	const [searchResults, setSearchResults] = useState([]);
	const [error, setError] = useState(null);
	// Grabs the search param text after q= in URL
	const urlParams = new URLSearchParams(window.location.search);
	let searchURL = urlParams.get('q');
	// console.log('searchURL', searchURL);

	useEffect(() => {
		//update to heroku later
		axios
			// Extract colon from params.id
			.get(`http://localhost:8000/api/results/?name=${searchURL}`)
			.then((res) => {
				setSearchResults(res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
		// Change the results every time searchURL changes, which happens when a new search is issued
	}, [searchURL]);

	if (!searchResults.length) {
		return <h2>No Results</h2>;
	}

	return (
		<section>
			Showing Results for: {`${searchURL}`}
			<div className='main'>
				{/* Limit random results to 30 images, set fallback image if image is null or gives an invalid image */}
				{searchResults.slice(0, 30).map((res) => {
					return (
						<div className='card' key={`${res.name}-card`}>
							<div className='results-img'>
								<Link to={`/detail/:${res._id}`} key={res.name}>
									<div className='anime animate__animated animate__backInLeft'>
										<div className='anime2'>
											<img
												className='slideshow'
												src={res.picture1}
												onError={(e) =>
													(e.currentTarget.src =
														'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
												}
												alt={res.name}
											/>
										</div>
									</div>
									<br />
									<h1>
										<button>{res.name}</button>
									</h1>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default SearchResults;
