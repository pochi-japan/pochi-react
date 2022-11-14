import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecDetail({ lang }) {
	// States
	const [rec, setRec] = useState({});
	const [error, setError] = useState(null);
	let params = useParams();
	const endPoint = params.id.substring(1);

	// console.log(params.id);

	useEffect(() => {
		//update to heroku later
		axios
			// Extract colon from params.id with substring
			.get(`http://localhost:8000/api/id/${endPoint}`)
			.then((res) => {
				setRec(res.data);
				console.log('res.data in RecDetail', res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	console.log('rec in RecDetail', rec);

	const bustedImg = 'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif';

	const imgs = [
		{
			id: 0,
			value: rec.picture1,
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

	// It's not working for the first image when there is no image :(
	const [pics, setPics] = useState(imgs[0]);
	const firstPic = pics.value || rec.picture1;
	const handleClick = (idx) => {
		const picSlider = imgs[idx];
		setPics(picSlider);
	};

	return (
		<div className='flex'>
			{lang ? (
				<div>
					<div className='container'>
						<h1>{rec.name}</h1>
						<p>Rating: {rec.recRating}</p>
						<p>Description: {rec.description}</p>
						{/* Modifies the updated timestamp to MM/DD/YYYY format */}
						<p>
							Last Updated:
							{new Date(rec.updatedAt).toLocaleDateString('en-US')}
						</p>
						{/* Try to set to a ternary */}
						<p>Location: {rec.location}</p>
						<p>URL: {rec.url}</p>
					</div>
				</div>
			) : (
				<div>
					<div className='container'>
						<h1>{rec.name}</h1>
						<p className='日本'>評価: {rec.recRating}</p>
						<p className='日本'>詳細: {rec.description}</p>
						{/* Modifies the updated timestamp to MM/DD/YYYY format */}
						<p className='日本'>
							最終更新日:
							{new Date(rec.updatedAt).toLocaleDateString('en-US')}
						</p>
						{/* Try to set to a ternary */}
						<p className='日本'>住所: {rec.location}</p>
						<p className='日本'>URL: {rec.url}</p>
					</div>
				</div>
			)}
			<div className='pics container'>
				<div className='flex curse'>
					{imgs.map((data, i) => (
						<div className='thumbnail' key={i}>
							<img
								alt={rec.name}
								className={pics.id === i ? 'clicked' : ''}
								src={data.value}
								onClick={() => handleClick(i)}
								height='70'
								width='100'
							/>
						</div>
					))}
				</div>
				<img src={firstPic} alt='focused pic' />
			</div>
		</div>
	);
}

export default RecDetail;
