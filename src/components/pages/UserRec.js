import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserRec({ rec, lang }) {
	const [updateRec, setUpdateRec] = useState(null);

	const navigate = useNavigate();
	const bustedImg = 'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif';

	const imgs = [
		{
			id: 0,
			value: rec.picture1 || bustedImg,
		},
		{
			id: 1,
			value: rec.picture2 || bustedImg,
		},
		{
			id: 2,
			value: rec.picture3 || bustedImg,
		},
		{
			id: 3,
			value: rec.picture4 || bustedImg,
		},
	];
	const [pics, setPics] = useState(imgs[0]);
	const handleClick = (idx) => {
		const picSlider = imgs[idx];
		setPics(picSlider);
	};

	useEffect(() => {
		fetch(`http://localhost:8000/api/id/${rec._id}`).then((res) =>
			res.json().then((data) => setUpdateRec(data))
		);
	}, [rec._id]);

	const handleDelete = () => {
		axios.delete(`http://localhost:8000/api/id/${rec._id}`);
		navigate('/user-rec');
	};

	// Have to use authorization bearer in handleDelete like below...
	// const handleSubmit = async (e) => {
	// 		e.preventDefault();

	// 		try {
	// 			const url = 'http://localhost:8000/api';
	// 			const res = await axios.post(
	// 				url,
	// 				{ ...rec, hashtags: rec.hashtags.split(' ') },
	// 				{
	// 					// Bearer JWT is not working after refresh?
	// 					headers: { Authorization: `Bearer ${JWT}` },
	// 				}
	// 			);

	// 			if (res.status === 200) {
	// 				setRec(initialRecState);
	// 				navigate('/user-recs');
	// 			}
	// 		} catch (err) {
	// 			setError('Upload Failed. Please try again.');
	// 		}
	// 	};

	if (!rec) {
		return <h1>No results found...</h1>;
	}

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
						<Link to={`/edit/:${rec._id}`}>
							<button>Edit</button>
						</Link>
						<button onClick={handleDelete}>Delete</button>
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
						<Link to={`/edit/:${rec._id}`}>
							<button>修正</button>
						</Link>
						<button onClick={handleDelete}>Delete</button>
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
				<img src={pics.value} alt='focused pic' />
			</div>
		</div>
	);
}

export default UserRec;
