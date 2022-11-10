import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainResults(props) {
	const [randomResults, setRandomResults] = useState([]);

	// Read random results from API
	useEffect(() => {
		//update to heroku later
		axios
			.get(`http://localhost:8000/api`)
			.then((res) => setRandomResults(res.data));
	});

	return (
		<div>
			{/* <section></section>
			<div>{res.name}</div>
			<div> */}
			{/* render first photo only */}
			{/* {res.pictures}
			</div> */}
			Main Results
		</div>
	);
}

export default MainResults;
