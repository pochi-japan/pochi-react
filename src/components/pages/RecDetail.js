import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import pochiNoImage from '../../images/pochi-noimage.png';

function RecDetail({ lang }) {
	// ******* STATES *******
	const [rec, setRec] = useState({});
	const [error, setError] = useState('');

	// ******* VARIABLES *******
	let params = useParams();

	const endPoint = params.id.substring(1);

	const bustedImg = pochiNoImage;

	const imgs = [
		{
			id: 0,
			value: rec.picture1 || bustedImg,
			alt: 'picture1',
		},
		{
			id: 1,
			value: rec.picture2 || bustedImg,
			alt: 'picture2',
		},
		{
			id: 2,
			value: rec.picture3 || bustedImg,
			alt: 'picture3',
		},
		{
			id: 3,
			value: rec.picture4 || bustedImg,
			alt: 'picture4',
		},
	];

	// ******* STATE *******
	// This state has to be under the imgs constant
	const [pics, setPics] = useState(imgs[0]);

	// ******* FUNCTIONS *******
	const handleClick = (idx) => {
		const picSlider = imgs[idx];
		setPics(picSlider);
	};

	// ******* API RESULTS *******
	useEffect(() => {
		//update to heroku later
		axios
			// Extract colon from params.id with substring
			// .get(`http://localhost:8000/api/id/${endPoint}`)
			.get(`https://pochi-japan.herokuapp.com/api/id/${endPoint}`)
			.then((res) => {
				setRec(res.data);
			})
			.catch((err) => {
				setError(
					<div className='日本'>
						{lang ? 'No Results' : 'ページが見つかりませんでした'}
					</div>
				);
			});
	}, [endPoint]);

	return (
		<div className='container flex detail'>
			{lang ? (
				<div className='container'>
					<div>
						<h1>{rec.name}</h1>
						<p>Rating: {rec.recRating}</p>
						<p>Description: {rec.description}</p>
						{/* Modifies the updated timestamp to MM/DD/YYYY format */}
						<p>
							Last Updated:
							{new Date(rec.updatedAt).toLocaleDateString('en-US')}
						</p>
						<p>Location: {rec.location}</p>
						<p>URL: {rec.url}</p>
					</div>
				</div>
			) : (
				<div className='container'>
					<div>
						<h1>{rec.name}</h1>
						<p className='日本'>評価: {rec.recRating}</p>
						<p className='日本'>詳細: {rec.description}</p>
						{/* Modifies the updated timestamp to MM/DD/YYYY format */}
						<p className='日本'>
							最終更新日:
							{new Date(rec.updatedAt).toLocaleDateString('en-US')}
						</p>
						<p className='日本'>住所: {rec.location}</p>
						<p className='日本'>URL: {rec.url}</p>
					</div>
				</div>
			)}
			<div className='pics container'>
				<div className='flex curse'>
					{imgs.map((data, i) => (
						<div className='thumbnail' key={i}>
							<hr />
							<img
								alt={rec.name}
								className={pics.id === i ? 'clicked' : ''}
								src={data.value}
								onClick={() => handleClick(i)}
								height='100'
								width='100'
							/>
						</div>
					))}
				</div>
				<img src={pics.value} alt='focused pic' />
			</div>
		</div>
	);
}

export default RecDetail;
