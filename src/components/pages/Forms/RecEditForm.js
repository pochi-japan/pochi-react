import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditForm() {
	// ******* VARIABLES *******
	const navigate = useNavigate();
	const params = useParams();
	const endPoint = params.id.substring(1);

	// ******* STATES *******
	const [editRec, setEditRec] = useState(null);
	const [updateRec, setUpdateRec] = useState(null);
	const [err, setError] = useState(null);

	// ******* FUNCTIONS *******
	const handleChange = (e) => {
		setUpdateRec({ ...updateRec, [e.target.id]: e.target.value });
	};

	const handleEdit = (e) => {
		e.preventDefault();
		axios
			// .patch(`http://localhost:8000/api/id/${params.id.substring(1)}`, editRec)
			.patch(
				`https://pochi-japan.herokuapp.com/api/id/${params.id.substring(1)}`,
				editRec
			)
			.then((res) => res.data);
		navigate('/user-rec');
	};

	// ******* API RESULTS *******
	useEffect(() => {
		//update to heroku later
		axios
			// Extract colon from params.id with substring
			// .get(`http://localhost:8000/api/id/${endPoint}`)
			.get(`https://pochi-japan.herokuapp.com/api/id/${endPoint}`)
			.then((res) => {
				setEditRec(res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, ['']);

	// ******* RETURN *******
	return (
		<div>
			Edit Page
			<h1>Editing {updateRec.name}</h1>
			<div className='rec-form-container'>
				<form autoComplete='off' onSubmit={handleEdit}>
					<label htmlFor='name'>Name: </label>
					<input
						placeholder='...name'
						id='name'
						type='text'
						name='name'
						value={updateRec.name}
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
						value={updateRec.description}
						onChange={handleChange}
						required
					/>
					<br />
					<input
						type='radio'
						id='place'
						name='category'
						value='place'
						checked={updateRec.category === 'place'}
						onChange={handleChange}
						required
					/>
					<label htmlFor='place'>place</label>
					<input
						type='radio'
						id='thing'
						name='category'
						value='thing'
						checked={updateRec.category === 'thing'}
						onChange={handleChange}
					/>
					<label htmlFor='thing'>thing</label>
					<br />
					<label htmlFor='recRating'>Rating: </label>
					<input
						placeholder='1-3'
						id='recRating'
						type='number'
						min={1}
						max={3}
						name='recRating'
						value={updateRec.recRating}
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
						value={updateRec.picture1}
						onChange={handleChange}
						alt='picture1'
					/>
					<br />
					<label htmlFor='picture2'>Picture #2: </label>
					<input
						placeholder='url for picture 2'
						id='picture2'
						type='text'
						name='picture2'
						value={updateRec.picture2}
						onChange={handleChange}
						alt='picture2'
					/>
					<label htmlFor='picture3'>Picture #3: </label>
					<input
						placeholder='url for picture 3'
						id='picture3'
						type='text'
						name='picture3'
						value={updateRec.picture3}
						onChange={handleChange}
						alt='picture3'
					/>
					<label htmlFor='picture4'>Picture #4: </label>
					<input
						placeholder='url for picture 4'
						id='picture4'
						type='text'
						name='picture4'
						value={updateRec.picture4}
						onChange={handleChange}
					/>
					<label htmlFor='location'>Location: </label>
					<input
						placeholder='...location'
						id='location'
						type='text'
						name='location'
						value={updateRec.location}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor='url'>URL: </label>
					<input
						placeholder='...url'
						id='url'
						type='text'
						name='url'
						value={updateRec.url}
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
						value={updateRec.hashtag}
						onChange={handleChange}
					/>
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
		</div>
	);
}

export default EditForm;
