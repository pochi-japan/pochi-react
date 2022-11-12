import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchResults({ searchString, setSearchString }) {
	const [searchResults, setSearchResults] = useState([]);

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
							<Link to={`/detail/:${res._id}`} key={res._id}>
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
			{/* {error ? <div>{error}</div> : <div>{''}</div>} */}
		</section>
	);
}

export default SearchResults;
