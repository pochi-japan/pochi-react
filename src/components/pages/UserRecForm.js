import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function UserRecForm({ JWT, user, token }) {
	const initialRecState = {
		name: '',
		description: '',
		category: '',
		recRating: 3,
		picture1: '',
		picture2: '',
		picture3: '',
		picture4: '',
		location: '',
		url: '',
		hashtag: [],
		owner: user.email,
	};

	const navigate = useNavigate();
	const [rec, setRec] = useState(initialRecState);
	const [error, setError] = useState('');

	// function splitter() {
	// 	const pics = rec.pictures.split(' ');
	// 	rec.pictures = pics;
	// }

	function handleChange(e) {
		setRec({
			...rec,
			[e.target.id]: e.target.value,
		});
		// rec.pictures.split(' ');
		// toString(rec.pictures);
		// const split = rec.pictures.split(' ');
		// rec.pictures = split;
		// console.log('rec.pictures', rec.pictures);
		// const pics = rec.pictures.split(' ');
		// rec.pictures = pics;
		console.log('recccc', rec);
		console.log('rec pics', rec.pictures);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await setRec(rec);

		try {
			const url = 'http://localhost:8000/api';
			// const url = 'https://pochi-japan.herokuapp.com/api/';
			// rec.pictures = rec.pictures.split(' ');
			// rec.hashtag = rec.hashtag.split(' ');
			const res = await axios.post(url, rec, {
				// Bearer JWT is not working after refresh?
				headers: { Authorization: `Bearer ${JWT}` },
			});
			console.log('Recommendation Response:', res);

			if (res.status === 200) {
				setRec(initialRecState);
				navigate('/user-recs');
			}
		} catch (err) {
			setError('Upload Failed. Please try again.');
		}
	};

	return (
		<div>
			<div className='rec-form-container'>
				<form autoComplete='off' onSubmit={handleSubmit}>
					<label htmlFor='name'>Name: </label>
					<input
						placeholder='...name'
						id='name'
						type='text'
						name='name'
						value={user.name}
						onChange={handleChange}
						required
					/>
					<br />
					<label htmlFor='description'>Description: </label>
					<textarea
						placeholder='...description'
						rows='4'
						cols='30'
						id='description'
						type='text'
						name='description'
						value={user.description}
						onChange={handleChange}
						required
					/>
					<br />
					<fieldset>
						<legend>Category: </legend>
						<input
							type='radio'
							id='place'
							name='category'
							value={user.category}
							required
						/>
						<label htmlFor='place'>place</label>
						<input
							type='radio'
							id='thing'
							name='category'
							value={user.category}
						/>
						<label htmlFor='thing'>thing</label>
					</fieldset>
					<label htmlFor='recRating'>Rating: </label>
					<input
						placeholder='1-3'
						id='recRating'
						type='number'
						min={1}
						max={3}
						name='recRating'
						value={user.recRating}
						onChange={handleChange}
						required
					/>
					<br />
					<p>Pictures (up to 4)</p>
					<label htmlFor='picture1'>Picture #1: </label>
					<input
						placeholder='url for picture 1'
						id='picture1'
						type='text'
						name='picture1'
						value={user.picture1}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor='picture2'>Picture #2: </label>
					<input
						placeholder='url for picture 2'
						id='picture2'
						type='text'
						name='picture2'
						value={user.picture2}
						// onChange={handleChange}
					/>
					<label htmlFor='picture3'>Picture #3: </label>
					<input
						placeholder='url for picture 3'
						id='picture3'
						type='text'
						name='picture3'
						value={user.picture3}
						// onChange={handleChange}
					/>
					<label htmlFor='picture4'>Picture #4: </label>
					<input
						placeholder='url for picture 4'
						id='picture4'
						type='text'
						name='picture4'
						value={user.picture4}
						// onChange={handleChange}
					/>
					<label htmlFor='location'>Location: </label>
					<input
						placeholder='...location'
						id='location'
						type='text'
						name='location'
						value={user.location}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor='url'>URL: </label>
					<input
						placeholder='...url'
						id='url'
						type='text'
						name='url'
						value={user.url}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor='hashtag'>Hashtag: </label>
					<textarea
						placeholder='...add multiple hashtags by adding a space between each'
						rows='4'
						cols='30'
						id='hashtag'
						type='text'
						name='hashtag'
						value={user.hashtag}
						onChange={handleChange}
					/>
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
		</div>
	);
}

export default UserRecForm;
