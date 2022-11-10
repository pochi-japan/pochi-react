import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainResults(props) {
	const [randomResults, setRandomResults] = useState([]);
	const [error, setError] = useState(null);

	// Read random results from API
	useEffect(() => {
		//update to heroku later
		axios
			.get(`http://localhost:8000/api`)
			.then((res) => setRandomResults(res.data))
			.catch((err) => {
				setError(err.message);
			});
	});

	return (
		<section>
			Main Results - delete this line later
			{randomResults.map((res) => {
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
