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

	function handleChange(e) {
		// Destructure event to access value and type
		const { value, type } = e.target;
		// If input type is radio, then set the category key to the value of the radio
		if (type === 'radio') {
			setRec({ ...rec, category: value });
		} else {
			setRec({
				...rec,
				[e.target.id]: e.target.value,
			});
		}
		console.log('rec', rec);
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
				<form className='rec-form' autoComplete='off' onSubmit={handleSubmit}>
					<div className='container'>
						<label htmlFor='name'>Name: </label>
						<br />
						<input
							placeholder='name...'
							id='name'
							type='text'
							name='name'
							value={rec.name}
							onChange={handleChange}
							required
						/>
						<br />
						<label htmlFor='description'>Description: </label>
						<br />
						<textarea
							placeholder='description...'
							rows='4'
							cols='30'
							id='description'
							type='text'
							name='description'
							value={rec.description}
							onChange={handleChange}
							required
						/>
						<br />
						<fieldset>
							<legend>Category: </legend>
							<input
								className='radio'
								type='radio'
								id='place'
								name='category'
								value='place'
								checked={rec.category === 'place'}
								onChange={handleChange}
								required
							/>
							<label className='label' htmlFor='place'>
								place
							</label>
							<br />
							<input
								className='radio'
								type='radio'
								id='thing'
								name='category'
								value='thing'
								checked={rec.category === 'thing'}
								onChange={handleChange}
							/>
							<label className='label' htmlFor='thing'>
								thing
							</label>
						</fieldset>
						<br />
						<label htmlFor='recRating'>Rating: </label>
						<br />
						<input
							placeholder='1-3...'
							id='recRating'
							type='number'
							min={1}
							max={3}
							name='recRating'
							value={rec.recRating}
							onChange={handleChange}
							required
						/>
						<br />
						<p>Pictures (up to 4)</p>
						<label htmlFor='picture1'>Picture #1: </label>
						<br />
						<input
							placeholder='url for picture 1...'
							id='picture1'
							type='text'
							name='picture1'
							value={rec.picture1}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor='picture2'>Picture #2: </label>
						<br />
						<input
							placeholder='url for picture 2...'
							id='picture2'
							type='text'
							name='picture2'
							value={rec.picture2}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor='picture3'>Picture #3: </label>
						<br />
						<input
							placeholder='url for picture 3...'
							id='picture3'
							type='text'
							name='picture3'
							value={rec.picture3}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor='picture4'>Picture #4: </label>
						<br />
						<input
							placeholder='url for picture 4...'
							id='picture4'
							type='text'
							name='picture4'
							value={rec.picture4}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor='location'>Location: </label>
						<br />
						<input
							placeholder='location...'
							id='location'
							type='text'
							name='location'
							value={rec.location}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor='url'>URL: </label>
						<br />
						<input
							placeholder='url...'
							id='url'
							type='text'
							name='url'
							value={rec.url}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor='hashtag'>Hashtag: </label>
						<br />
						<textarea
							placeholder='add multiple hashtags by adding a space between each...'
							rows='4'
							cols='30'
							id='hashtag'
							type='text'
							name='hashtag'
							value={rec.hashtag}
							onChange={handleChange}
						/>
						<br />
						<button type='submit'>SUBMIT</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserRecForm;
