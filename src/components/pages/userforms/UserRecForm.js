import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function UserRecForm({ token, lang, baseURL }) {
	// ******* VARIABLES *******
	const initialRecState = {
		name: '',
		description: '',
		category: '',
		recRating: '3',
		picture1: '',
		picture2: '',
		picture3: '',
		picture4: '',
		location: '',
		url: '',
		hashtags: '',
		owner: localStorage.getItem('email'),
	};

	const navigate = useNavigate();

	// ******* STATES *******
	const [data, setData] = useState(initialRecState);

	// ******* FUNCTIONS *******
	function handleChange(e) {
		// Destructure event to access value, type, id
		const { value, type, id } = e.target;
		// If input type is radio, then set the category key to the value of the radio
		if (type === 'radio') {
			setData({ ...data, category: value });
		} else {
			setData({
				...data,
				[id]: value,
			});
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		// 	{ ...data, hashtags: data.hashtags.split(' ') } Use this code in the future to split up hashtags
		const config = {
			url: `${baseURL}/id`,
			method: 'POST',
			data: data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.request(config)
			.then((res) => {
				if (res.status === 200) {
					setData(initialRecState);
					navigate('/user-recs');
					// Make the window refresh to show new rec for now - fix this code to use state in the future
					window.location.reload(true);
				}
			})
			.catch((err) => {
				console.log('Error', err.message);
			});
	};

	// ******* RETURN *******
	return (
		<div>
			{lang ? (
				<div className='rec-form-container'>
					<form className='rec-form' autoComplete='off' onSubmit={handleSubmit}>
						<div className='container'>
							<label htmlFor='name'>Name: </label>
							<br />
							<input
								id='name'
								type='text'
								name='name'
								value={data.name}
								onChange={handleChange}
								required
							/>
							<br />
							<label htmlFor='description'>Description: </label>
							<br />
							<textarea
								rows='4'
								cols='30'
								id='description'
								type='text'
								name='description'
								value={data.description}
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
									checked={data.category === 'place'}
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
									checked={data.category === 'thing'}
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
								value={data.recRating}
								onChange={handleChange}
								required
							/>
							<p />
							<fieldset>
								<legend>Pictures (up to 4)</legend>
								<label htmlFor='picture1'>Picture #1: </label>
								<br />
								<input
									id='picture1'
									type='text'
									name='picture1'
									value={data.picture1}
									onChange={handleChange}
									required
								/>
								<br />
								<label htmlFor='picture2'>Picture #2: </label>
								<br />
								<input
									id='picture2'
									type='text'
									name='picture2'
									value={data.picture2}
									onChange={handleChange}
								/>
								<br />
								<label htmlFor='picture3'>Picture #3: </label>
								<br />
								<input
									id='picture3'
									type='text'
									name='picture3'
									value={data.picture3}
									onChange={handleChange}
								/>
								<br />
								<label htmlFor='picture4'>Picture #4: </label>
								<br />
								<input
									id='picture4'
									type='text'
									name='picture4'
									value={data.picture4}
									onChange={handleChange}
								/>
							</fieldset>
							<p />
							<label htmlFor='location'>Address: </label>
							<br />
							<input
								id='location'
								type='text'
								name='location'
								value={data.location}
								onChange={handleChange}
							/>
							<br />
							<label htmlFor='url'>URL: </label>
							<br />
							<input
								id='url'
								type='text'
								name='url'
								value={data.url}
								onChange={handleChange}
							/>
							<br />
							<label htmlFor='hashtags'>Hashtags: </label>
							<br />
							<textarea
								rows='4'
								cols='30'
								id='hashtags'
								type='text'
								name='hashtags'
								value={data.hashtags}
								onChange={handleChange}
							/>
							<br />
							<button type='submit'>SUBMIT</button>
						</div>
					</form>
				</div>
			) : (
				<div className='rec-form-container'>
					<form className='rec-form' autoComplete='off' onSubmit={handleSubmit}>
						<div className='container'>
							<label className='??????' htmlFor='name'>
								??????:
							</label>
							<br />
							<input
								id='name'
								type='text'
								name='name'
								value={data.name}
								onChange={handleChange}
								required
							/>
							<br />
							<label className='??????' htmlFor='description'>
								??????:
							</label>
							<br />
							<textarea
								rows='4'
								cols='30'
								id='description'
								type='text'
								name='description'
								value={data.description}
								onChange={handleChange}
								required
							/>
							<br />
							<fieldset>
								<legend className='??????'>???????????????: </legend>
								<input
									className='radio'
									type='radio'
									id='place'
									name='category'
									value='place'
									checked={data.category === 'place'}
									onChange={handleChange}
									required
								/>
								<label className='?????? label' htmlFor='place'>
									??????
								</label>
								<br />
								<input
									className='radio'
									type='radio'
									id='thing'
									name='category'
									value='thing'
									checked={data.category === 'thing'}
									onChange={handleChange}
								/>
								<label className='?????? label' htmlFor='thing'>
									??????
								</label>
							</fieldset>
							<br />
							<label className='??????' htmlFor='recRating'>
								??????:
							</label>
							<br />
							<input
								placeholder='1-3...'
								id='recRating'
								type='number'
								min={1}
								max={3}
								name='recRating'
								value={data.recRating}
								onChange={handleChange}
								required
							/>
							<p />
							<fieldset>
								<legend>?????? (??????4)</legend>
								<label className='??????' htmlFor='picture1'>
									?????? #1:
								</label>
								<br />
								<input
									id='picture1'
									type='text'
									name='picture1'
									value={data.picture1}
									onChange={handleChange}
									required
								/>
								<br />
								<label className='??????' htmlFor='picture2'>
									?????? #2:
								</label>
								<br />
								<input
									id='picture2'
									type='text'
									name='picture2'
									value={data.picture2}
									onChange={handleChange}
								/>
								<br />
								<label className='??????' htmlFor='picture3'>
									?????? #3:
								</label>
								<br />
								<input
									id='picture3'
									type='text'
									name='picture3'
									value={data.picture3}
									onChange={handleChange}
								/>
								<br />
								<label className='??????' htmlFor='picture4'>
									?????? #4:
								</label>
								<br />
								<input
									id='picture4'
									type='text'
									name='picture4'
									value={data.picture4}
									onChange={handleChange}
								/>
							</fieldset>
							<p />
							<label className='??????' htmlFor='location'>
								??????:
							</label>
							<br />
							<input
								id='location'
								type='text'
								name='location'
								value={data.location}
								onChange={handleChange}
							/>
							<br />
							<label htmlFor='url'>URL: </label>
							<br />
							<input
								id='url'
								type='text'
								name='url'
								value={data.url}
								onChange={handleChange}
							/>
							<br />
							<label className='??????' htmlFor='hashtags'>
								??????????????????:
							</label>
							<br />
							<textarea
								rows='4'
								cols='30'
								id='hashtags'
								type='text'
								name='hashtags'
								value={data.hashtags}
								onChange={handleChange}
							/>
							<br />
							<button type='submit'>OK</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}

export default UserRecForm;
