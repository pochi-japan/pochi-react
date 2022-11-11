import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecDetail(props) {
	// States
	const [rec, setRec] = useState({});
	const [error, setError] = useState(null);
	let params = useParams();

	useEffect(() => {
		//update to heroku later
		axios
			// Extract colon from params.id
			.get(`http://localhost:8000/api/${params.id.substring(1)}`)
			.then((res) => {
				setRec(res.data);
				console.log('res.data in RecDetail', res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	return (
		<div>
			Rec Detail
			<h1>{rec.name}</h1>
			<img
				src={rec.picture1}
				onError={(e) =>
					(e.currentTarget.src =
						'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
				}
				alt={rec.name}
			/>
			<img
				src={rec.picture2}
				onError={(e) =>
					(e.currentTarget.src =
						'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
				}
				alt={rec.name}
			/>
			<img
				src={rec.picture3}
				onError={(e) =>
					(e.currentTarget.src =
						'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
				}
				alt={rec.name}
			/>
			<img
				src={rec.picture4}
				onError={(e) =>
					(e.currentTarget.src =
						'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
				}
				alt={rec.name}
			/>
			<br />
			Rating: {rec.recRating}
			<br />
			Description: {rec.description}
			<br />
			{/* Maybe try to render date (have to either update backend or we can use substring?) */}
			Submitted on: {rec.updatedAt}
			<br />
			{/*  */}
			Location: {rec.location}
			URL: {rec.url}
		</div>
	);
}

export default RecDetail;
