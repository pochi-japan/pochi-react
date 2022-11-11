import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainResults(props) {
	const [randomResults, setRandomResults] = useState([]);
	const [error, setError] = useState(null);
	// const [imgSrc, setImgSrc] = useState('');

	// Function to shuffle the results
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	// Read results from API
	useEffect(() => {
		//update to heroku later
		axios
			.get(`http://localhost:8000/api`)
			.then((res) => {
				const data = shuffle(res.data);
				//call the function to randomize the data
				setRandomResults(res.data);
				// console.log(res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	// Handle when res.picture1 does not exist or provides an error image
	// const handleImgError = (e) => (e.target.onerror = null);
	// e.target.src = 'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif';
	//Filter by category
	// function filterPlace(randomResults, query) {
	//     return randomResults.filter((el) => el.includes())
	// }
	// let placeResults = randomResults.filter(category => )

	// function dummyPic(pic) {
	// 	if (pic === null) {
	// 		return pic === 'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif';
	// 	}
	// }

	return (
		<section>
			Main Results - delete this line later
			{/* Limit random results to 5 images, set fallback image if image is null or gives an invalid image */}
			{randomResults.slice(0, 4).map((res) => {
				return (
					<div key={`${res.name}-card`}>
						<div className='results-img'>
							<Link to={`/detail/:${res._id}`} key={res.name}>
								<h1>{res.name}</h1>
								<p></p>
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

export default MainResults;
