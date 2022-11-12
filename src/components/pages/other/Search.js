import axios from 'axios';
import { useEffect, useState } from 'react';

function Search({
	searchString,
	setSearchString,
	handleChange,
	handleSubmit,
	allResults,
}) {
	// // Showing the suggested results while user types
	// const [allResults, setAllResults] = useState('');
	const [error, setError] = useState(null);

	// const handleChange = (e) => {
	// 	setSearchString(e.target.value);
	// 	if (e.target.value === '') {
	// 		setSearchShow(false);
	// 	} else {
	// 		setSearchShow(true);
	// 	}
	// };

	// // Search Bar
	// const filterResults = allResults.filter((res) => {
	// 	return res.name.includes('test');
	// 	// return res.name.toLowerCase().includes(searchString.LowerCase());
	// 	// ||
	// 	// res.description.toLowerCase().includes(searchString.LowerCase())
	// 	// ||
	// 	// res.hashtag.toLowerCase().includes(searchString.LowerCase())
	// });
	// console.log('allResults in Search', allResults[0].name);
	// Read results from API
	// useEffect(() => {
	// 	//update to heroku later
	// 	axios
	// 		.get(`http://localhost:8000/api`)
	// 		.then((res) => {
	// 			setAllResults(res.data);
	// 			//call the function to randomize the data
	// 		})
	// 		.catch((err) => {
	// 			setError(err.message);
	// 		});
	// }, []);
	//End From Main Results

	console.log('all results', allResults);
	// console.log('randomresults', randomResults);

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
				{/* {allResults
					.slice(0, 10)
					.filter((rec) => {
						{
							console.log('rec in filter', rec);
						}
						const searchTerm = searchString.toLowerCase();
						const name = rec.name.toLowerCase();
						const description = rec.description.toLowerCase();
						const hashtag = rec.hashtag.toLowerCase();
						return (
							searchTerm &&
							(name.includes(searchTerm) ||
								description.includes(searchTerm) ||
								hashtag.includes(searchTerm)) &&
							name !== searchTerm
						);
					})
					.map((rec) => (
						<div
							className='dropdown-row'
							key={rec._id}
							onClick={() => handleSubmit(rec.name)}>
							{rec.name}
						</div>
					))} */}
			</div>
		</div>
	);
}

export default Search;

// 	return (
// 		<section>
// 			Main Results - delete this line later
// 			{/* Limit random results to 5 images, set fallback image if image is null or gives an invalid image */}
// 			{randomResults.slice(0, 4).map((res) => {
// 				return (
// 					<div key={`${res.name}-card`}>
// 						<div className='results-img'>
// 							<Link to={`/detail/:${res._id}`} key={res.name}>
// 								<h1>{res.name}</h1>
// 								<br />
// 								<img
// 									src={res.picture1}
// 									onError={(e) =>
// 										(e.currentTarget.src =
// 											'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
// 									}
// 									alt={res.name}
// 								/>
// 							</Link>
// 						</div>
// 					</div>
// 				);
// 			})}
// 			{error ? <div>{error}</div> : <div>{''}</div>}
// 		</section>
// 	);
// }
