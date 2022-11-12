import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditForm({ userResult, userResultTemp }) {
	const navigate = useNavigate();
	const [userRec, setUserRec] = useState(null);

	const handleChange = (e) => {
		setUserRec({ [e.target.id]: e.target.value });
	};

	const handleEdit = (e) => {
		e.preventDefault();
		axios
			.patch(`http://localhost:8000/api/${userResultTemp._id}`, userRec)
			.then((res) => res.data);
		navigate('/user-rec');
	};

	return (
		<div>
			<h1>Editing {userResultTemp.name}</h1>
			<div className='rec-form-container'>
				<form autoComplete='off' onSubmit={handleEdit}>
					<label htmlFor='name'>Name: </label>
					<input
						placeholder='...name'
						id='name'
						type='text'
						name='name'
						value={userResultTemp.name}
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
						value={userResultTemp.description}
						onChange={handleChange}
						required
					/>
					<br />
					<input
						type='radio'
						id='place'
						name='category'
						value='place'
						checked={userResultTemp.category === 'place'}
						onChange={handleChange}
						required
					/>
					<label htmlFor='place'>place</label>
					<input
						type='radio'
						id='thing'
						name='category'
						value='thing'
						checked={userResultTemp.category === 'thing'}
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
						value={userResultTemp.recRating}
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
						value={userResultTemp.picture1}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor='picture2'>Picture #2: </label>
					<input
						placeholder='url for picture 2'
						id='picture2'
						type='text'
						name='picture2'
						value={userResultTemp.picture2}
						onChange={handleChange}
					/>
					<label htmlFor='picture3'>Picture #3: </label>
					<input
						placeholder='url for picture 3'
						id='picture3'
						type='text'
						name='picture3'
						value={userResultTemp.picture3}
						onChange={handleChange}
					/>
					<label htmlFor='picture4'>Picture #4: </label>
					<input
						placeholder='url for picture 4'
						id='picture4'
						type='text'
						name='picture4'
						value={userResultTemp.picture4}
						onChange={handleChange}
					/>
					<label htmlFor='location'>Location: </label>
					<input
						placeholder='...location'
						id='location'
						type='text'
						name='location'
						value={userResultTemp.location}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor='url'>URL: </label>
					<input
						placeholder='...url'
						id='url'
						type='text'
						name='url'
						value={userResultTemp.url}
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
						value={userResultTemp.hashtag}
						onChange={handleChange}
					/>
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
		</div>
	);
}

export default EditForm;
