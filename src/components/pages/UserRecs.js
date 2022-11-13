import RecEditForm from './forms/RecEditForm';
import { useState } from 'react';

function UserRecs({ allResults, user, token }) {
	// const [userResult, setUserResult] = useState();
	const [error, setError] = useState(null);

	const includesUserEmail = (res) => {
		if (res === user.email) return true;
	};

	console.log(
		'includesUserEmail function',
		includesUserEmail(allResults.owner, user.email)
	);

	const userResults = allResults.filter(includesUserEmail);

	// console.log('user', user);
	// console.log('useremail', user.email);
	// console.log('allResults in UserRecs', allResults);
	// console.log('includes user email', userResults);

	return (
		<div>
			Your Recommendations
			{/* <RecEditForm /> */}
			{/* {includesUserEmail(allResults).map((rec) => (
				<div className='user-rec-container' key={rec._id}>
					{rec.name}
				</div>
			))} */}
		</div>
	);
}

export default UserRecs;
