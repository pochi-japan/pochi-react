import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainResults(props) {
	const [randomResults, setRandomResults] = useState([]);
	const [error, setError] = useState(null);

	// Function to randomize the results
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
				//randomize the results here
				setRandomResults(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	//Filter by category
	// function filterPlace(randomResults, query) {
	//     return randomResults.filter((el) => el.includes())
	// }
	// let placeResults = randomResults.filter(category => )

	return (
		<section>
			Main Results - delete this line later
			{/* Limit random results to 5 images */}
			{randomResults.slice(0, 3).map((res) => {
				return (
					<div key={`${res.name}-card`}>
						<div className='results-img'>
							<Link to={`/detail/:${res._id}`} key={res.name}>
								{res.name}
								<p></p>
								<img src={res.pictures[0]} alt={res.name} />
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
