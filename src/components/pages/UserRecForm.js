import React from 'react';

function UserRecForm({ user }) {
    return (
			<div>
				<div
					className='rec-form-container'
					// onSubmit={handleSubmit}
				>
					<form autoComplete='off'>
						<label htmlFor='name'>Name: </label>
						<input
                        placeholder='...name'
							id='name'
							type='text'
							name='name'
							value={user.name}
							// onChange={handleChange}
							required
						/>
						<label htmlFor='description'>Description: </label>
						<textarea
                        placeholder='...description'
							rows='4'
							cols='30'
							id='description'
							type='text'
							name='description'
							value={user.description}
							// onChange={handleChange}
							required
						/>
						<fieldset>
							<legend>Category: </legend>
							<input type='radio' id='place' name='category' />
							<label htmlFor='place'>place</label>
							<input type='radio' id='thing' name='category' />
							<label htmlFor='thing'>thing</label>
						</fieldset>
						<label htmlFor='rating'>Rating: </label>
						<input
                        placeholder='1-3'
							id='rating'
							type='number'
							name='rating'
							value={user.recRating}
							// onChange={handleChange}
							required
						/>
						<label htmlFor='pictures'>Pictures: </label>
						<input
                            placeholder='...put in multiple pics by putting a space between each url'
							id='pictures'
							type='text'
							name='pictures'
							value={user.pictures}
							// onChange={handleChange}
						/>
						{/* <label htmlFor='picture2'>Picture #2: </label>
						<input
							id='picture2'
							type='text'
							name='pictures'
							value={user.pictures}
							// onChange={handleChange}
						/>
						<label htmlFor='picture3'>Picture #3: </label>
						<input
							id='picture3'
							type='text'
							name='pictures'
							value={user.pictures}
							// onChange={handleChange}
						/>
						<label htmlFor='picture4'>Picture #4: </label>
						<input
							id='picture4'
							type='text'
							name='pictures'
							value={user.pictures}
							// onChange={handleChange}
						/> */}
						<label htmlFor='location'>Location: </label>
						<input
                        placeholder='...location'
							id='location'
							type='text'
							name='location'
							value={user.location}
							// onChange={handleChange}
						/>
						<label htmlFor='url'>URL: </label>
						<input
                            placeholder='...url'
							id='url'
							type='text'
							name='url'
							value={user.url}
							// onChange={handleChange}
						/>
						<label htmlFor='hashtag'>Hashtag: </label>
						<textarea
                            placeholder='...add multiple hashtags by adding a space between each'
							rows='4'
							cols='30'
							id='hashtag'
							type='text'
							name='hashtag'
							value={user.hashtag}
							// onChange={handleChange}
						/>
						<button type='submit'>SUBMIT</button>
					</form>
				</div>
			</div>
		);
}

export default UserRecForm;