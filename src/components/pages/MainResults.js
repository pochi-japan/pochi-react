import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainResults({ randomResults, error, lang }) {
	// const [randomResults, setRandomResults] = useState([]);
	// const [error, setError] = useState(null);

	// // Function to shuffle the results
	// function shuffle(array) {
	// 	for (let i = array.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[array[i], array[j]] = [array[j], array[i]];
	// 	}
	// }

	// // Read results from API
	// useEffect(() => {
	// 	//update to heroku later
	// 	axios
	// 		.get(`http://localhost:8000/api`)
	// 		.then((res) => {
	// 			const data = shuffle(res.data);
	// 			//call the function to randomize the data
	// 			setRandomResults(res.data);
	// 			// console.log(res.data);
	// 		})
	// 		.catch((err) => {
	// 			setError(err.message);
	// 		});
	// }, []);

	return (
		<section>
			{lang ? (
				<h1 className='en'>Welcome to Pochi</h1>
			) : (
				<h1 className='ポチ 日本'>ポチへようこそ</h1>
			)}
			<div className='main'>
				{/* Limit random results to 5 images, set fallback image if image is null or gives an invalid image */}
				{randomResults.slice(0, 4).map((res) => {
					return (
						<div className='card' key={`${res.name}-card`}>
							<div className='results-img'>
								<Link to={`/detail/:${res._id}`} key={res.name}>
									<img
										className='slideshow'
										src={res.picture1}
										onError={(e) =>
											(e.currentTarget.src =
												'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
										}
										alt={res.name}
									/>
									<br />
									<h1>
										<button>{res.name}</button>
									</h1>
								</Link>
							</div>
						</div>
					);
				})}
				{error ? <div>{error}</div> : <div>{''}</div>}
			</div>
		</section>
	);
}

export default MainResults;
