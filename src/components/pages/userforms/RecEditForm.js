import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditForm({ ownersRec, closeModal, lang, baseURL }) {
	// ******* VARIABLES *******
	const initialUpdateState = {
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
	// const params = useParams();
	// const endPoint = params.id.substring(1);
	const token = localStorage.getItem('token');

	// ******* STATES *******
	const [updateRec, setUpdateRec] = useState(initialUpdateState);
	const [err, setError] = useState(null);

	// ******* FUNCTIONS *******
	function handleChange(e) {
		// Destructure event to access defaultValue, type, id
		const { defaultValue, type, id } = e.target;
		// If input type is radio, then set the category key to the value of the radio
		if (type === 'radio') {
			setUpdateRec({ ...updateRec, category: defaultValue });
		} else {
			setUpdateRec({
				...updateRec,
				[id]: defaultValue,
			});
		}
	}

	const handleEdit = async (e) => {
		e.preventDefault();
		// 	{ ...data, hashtags: data.hashtags.split(' ') } Use this code in the future to split up hashtags
		const config = {
			url: `${baseURL}` + `${ownersRec._id}`,
			// double check above later
			method: 'PATCH',
			data: updateRec,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		console.log(config);
		axios
			.request(config)
			.then((res) => {
				if (res.status === 200) {
					// setUpdateRec(initialRecState);
					navigate('/user-recs');
					closeModal(false);
					// Make the window refresh to show new rec for now - fix this code to use state in the future
					// window.location.reload(true);
				}
			})
			.catch((err) => {
				console.log('Error', err.message);
			});
	};

	// Add button to handle close modal in the future

	// Will probably not use after all, but keeping it here for backup (same with patch URL above)
	// ******* API RESULTS *******
	// useEffect(() => {
	// 	//update to heroku later
	// 	axios
	// 		// Extract colon from params.id with substring
	// 		// .get(`http://localhost:8000/api/id/${endPoint}`)
	// 		.get(`https://pochi-japan.herokuapp.com/api/id/${endPoint}`)
	// 		.then((res) => {
	// 			setUpdateRec(res.data);
	// 		})
	// 		.catch((err) => {
	// 			setError(err.message);
	// 		});
	// }, [endPoint]);

	// ******* RETURN *******
	return (
		<div>
			<h1>Editing {ownersRec.name}</h1>
			{lang ? (
				<div className='rec-form-container'>
					<form className='rec-form' autoComplete='off' onSubmit={handleEdit}>
						<div className='container'>
							<label htmlFor='name'>Name: </label>
							<br />
							<input
								id='name'
								type='text'
								name='name'
								defaultValue={ownersRec.name}
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
								defaultValue={ownersRec.description}
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
									defaultValue='place'
									checked={ownersRec.category === 'place'}
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
									defaultValue='thing'
									checked={ownersRec.category === 'thing'}
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
								defaultValue={ownersRec.recRating}
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
									defaultValue={ownersRec.picture1}
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
									defaultValue={ownersRec.picture2}
									onChange={handleChange}
								/>
								<br />
								<label htmlFor='picture3'>Picture #3: </label>
								<br />
								<input
									id='picture3'
									type='text'
									name='picture3'
									defaultValue={ownersRec.picture3}
									onChange={handleChange}
								/>
								<br />
								<label htmlFor='picture4'>Picture #4: </label>
								<br />
								<input
									id='picture4'
									type='text'
									name='picture4'
									defaultValue={ownersRec.picture4}
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
								defaultValue={ownersRec.location}
								onChange={handleChange}
							/>
							<br />
							<label htmlFor='url'>URL: </label>
							<br />
							<input
								id='url'
								type='text'
								name='url'
								defaultValue={ownersRec.url}
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
								defaultValue={ownersRec.hashtags}
								onChange={handleChange}
							/>
							<br />
							<button type='submit'>SUBMIT</button>
						</div>
					</form>
				</div>
			) : (
				<div className='rec-form-container'>
					<form className='rec-form' autoComplete='off' onSubmit={handleEdit}>
						<div className='container'>
							<label className='日本' htmlFor='name'>
								名前:
							</label>
							<br />
							<input
								id='name'
								type='text'
								name='name'
								defaultValue={ownersRec.name}
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
								defaultValue={ownersRec.description}
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
									defaultValue='place'
									checked={ownersRec.category === 'place'}
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
									defaultValue='thing'
									checked={ownersRec.category === 'thing'}
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
								defaultValue={ownersRec.recRating}
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
									defaultValue={ownersRec.picture1}
									onChange={handleChange}
									required
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
									defaultValue={ownersRec.picture2}
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
									defaultValue={ownersRec.picture3}
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
									defaultValue={ownersRec.picture4}
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
								defaultValue={ownersRec.location}
								onChange={handleChange}
							/>
							<br />
							<label htmlFor='url'>URL: </label>
							<br />
							<input
								id='url'
								type='text'
								name='url'
								defaultValue={ownersRec.url}
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
								defaultValue={ownersRec.hashtags}
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

export default EditForm;
