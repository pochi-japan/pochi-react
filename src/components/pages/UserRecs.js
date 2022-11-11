import RecEditForm from './Forms/RecEditForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserRecs({}) {
	const [userResult, setUserResult] = useState();
	const [error, setError] = useState(null);

	// Read results from API
	// Read results from API
	useEffect(() => {
		//update to heroku later
		axios
			.get(`http://localhost:8000/api`)
			.then((res) => {
				setUserResult(res.data);
				console.log('userrecs', res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	let userResultTemp = userResult[0];

	return (
		<div>
			Your Recommendations
			<RecEditForm userResult={userResult} userResultTemp={userResultTemp} />
		</div>
	);
}

export default UserRecs;
