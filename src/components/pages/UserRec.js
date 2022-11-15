import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pochiNoImage from '../../images/pochi-noimage.png';

function UserRec({ ownersRec, lang, token }) {
	// ******* VARIABLES *******
	const navigate = useNavigate();

	const bustedImg = pochiNoImage;

	const imgs = [
		{
			id: 0,
			value: ownersRec.picture1,
			alt: 'picture1',
		},
		{
			id: 1,
			value: ownersRec.picture2 || bustedImg,
			alt: 'picture2',
		},
		{
			id: 2,
			value: ownersRec.picture3 || bustedImg,
			alt: 'picture3',
		},
		{
			id: 3,
			value: ownersRec.picture4 || bustedImg,
			alt: 'picture4',
		},
	];

	// ******* STATES *******
	const [updateRec, setUpdateRec] = useState(null);
	const [pics, setPics] = useState(imgs[0]);

	// ******* FUNCTIONS *******
	const handleClick = (idx) => {
		const picSlider = imgs[idx];
		setPics(picSlider);
	};

	const handleDelete = async (e) => {
		e.preventDefault();
		const config = {
			// url: `http://localhost:8000/api/id/${ownersRec._id}`,
			url: `https://pochi-japan.herokuapp.com/api/id/${ownersRec._id}`,
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.request(config)
			.then((res) => {
				if (res.status === 200) {
					navigate('/user-recs');
					// Make the window refresh to show new rec for now - fix this code to use state in the future
					window.location.reload(true);
				}
			})
			.catch((err) => {
				console.log('Error', err.message);
			});
	};

	// ******* API RESULTS *******
	useEffect(() => {
		// fetch(`http://localhost:8000/api/id/${ownersRec._id}`).then((res) =>
		fetch(`https://pochi-japan.herokuapp.com/api/id/${ownersRec._id}`).then(
			(res) => res.json().then((data) => setUpdateRec(data))
		);
	}, [ownersRec._id]);

	// ******* RETURN *******
	return (
		<div className='flex user-rec'>
			{ownersRec ? (
				<div>
					{lang ? (
						<div className='container'>
							<div>
								<hr />
								<h1>{ownersRec.name}</h1>
								<p>Rating: {ownersRec.recRating}</p>
								<p>Description: {ownersRec.description}</p>
								{/* Modifies the updated timestamp to MM/DD/YYYY format */}
								<p>
									Last Updated:
									{new Date(ownersRec.updatedAt).toLocaleDateString('en-US')}
								</p>
								<p>Location: {ownersRec.location}</p>
								<p>URL: {ownersRec.url}</p>
								<Link to={`/edit/:${ownersRec._id}`}>
									<button>Edit</button>
								</Link>
								<button onClick={handleDelete}>Delete</button>
							</div>
							<div className='pics container'>
								<div className='flex curse'>
									{imgs.map((data, i) => (
										<div className='thumbnail' key={i}>
											<hr />
											<img
												alt={ownersRec.name}
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
							<hr />
						</div>
					) : (
						<div className='container'>
							<div>
								<hr />
								<h1>{ownersRec.name}</h1>
								<p className='日本'>評価: {ownersRec.recRating}</p>
								<p className='日本'>詳細: {ownersRec.description}</p>
								{/* Modifies the updated timestamp to MM/DD/YYYY format */}
								<p className='日本'>
									最終更新日:
									{new Date(ownersRec.updatedAt).toLocaleDateString('en-US')}
								</p>
								<p className='日本'>住所: {ownersRec.location}</p>
								<p className='日本'>URL: {ownersRec.url}</p>
								<Link to={`/edit/:${ownersRec._id}`}>
									<button className='日本'>修正</button>
								</Link>
								<button className='日本' onClick={handleDelete}>
									削除
								</button>
							</div>
							<div className='pics container'>
								<div className='flex curse'>
									{imgs.map((data, i) => (
										<div className='thumbnail' key={i}>
											<hr />
											<img
												alt={ownersRec.name}
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
							<hr />
						</div>
					)}
				</div>
			) : (
				<div>
					{lang ? (
						<h1>No results found...</h1>
					) : (
						<h1 className='日本'>検索結果が見つかりませんでした...</h1>
					)}
				</div>
			)}
		</div>
	);
}

export default UserRec;
