import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
	const [searchResults, setSearchResults] = useState([]);

	let params = useParams();

	useEffect(() => {
		getResults(params.name);
	}, [params.name]);

	// Filter allResults to show only ones that include the params in either rec.name, description, or hashtag (do hashtag later cuz the logic is harder)
	const getResults = () => {
		const url = ``;
	};

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

// <div className='search-dropdown'>
// 	{allResults
// 		.filter((rec) => {
// 			{
// 				// console.log('rec in filter', rec);
// 			}
// 			const searchTerm = searchString.toLowerCase();
// 			const name = rec.name.toLowerCase();
// 			const description = rec.description.toLowerCase();
// 			//hashtag is an array so this won't work yet
// 			// const hashtag = rec.hashtag.toLowerCase();
// 			return (
// 				((searchTerm && name.includes(searchTerm)) ||
// 					description.includes(searchTerm)) &&
// 				// || (hashtag.includes(searchTerm)
// 				name !== searchTerm &&
// 				searchTerm !== ''
// 			);
// 		})
// 		.slice(0, 10)
// 		.map((rec) => (
// 			<div
// 				className='dropdown-row'
// 				key={rec._id}
// 				onClick={() => handleSubmit(rec.name)}>
// 				{rec.name}
// 			</div>
// 		))}
// </div>;

export default SearchResults;
