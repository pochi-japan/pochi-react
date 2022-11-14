import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function UserRecForm({ JWT, user, token, lang }) {
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
		hashtags: [''],
		owner: user.email,
	};

	console.log({ user });

	const navigate = useNavigate();
	const [rec, setRec] = useState(initialRecState);
	const [error, setError] = useState('');
	const [data, setData] = useState(initialRecState);

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

		try {
			const url = 'http://localhost:8000/api';
			const res = await axios.post(
				url,
				{ ...res, hashtags: rec.hashtags.split(' ') },
				{
					// Bearer JWT is not working after refresh?
					headers: { Authorization: `Bearer ${JWT}` },
				},
				setRec(res),
				console.log(res)
			);

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
							<label className='日本' htmlFor='name'>
								名前:
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
							<label className='日本' htmlFor='description'>
								詳細:
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
								<legend className='日本'>カテゴリー: </legend>
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
								<label className='日本 label' htmlFor='place'>
									場所
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
								<label className='日本 label' htmlFor='thing'>
									もの
								</label>
							</fieldset>
							<br />
							<label className='日本' htmlFor='recRating'>
								評価:
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
								<legend>写真 (最大4)</legend>
								<label className='日本' htmlFor='picture1'>
									写真 #1:
								</label>
								<br />
								<input
									id='picture1'
									type='text'
									name='picture1'
									value={data.picture1}
									onChange={handleChange}
								/>
								<br />
								<label className='日本' htmlFor='picture2'>
									写真 #2:
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
								<label className='日本' htmlFor='picture3'>
									写真 #3:
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
								<label className='日本' htmlFor='picture4'>
									写真 #4:
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
							<label className='日本' htmlFor='location'>
								住所:
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
							<label className='日本' htmlFor='hashtags'>
								ハッシュタグ:
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
