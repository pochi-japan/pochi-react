import UserRec from './UserRec';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function UserRecList({ allResults, user, lang }) {
	// console.log('useremail', user.email);

	// const [rec, setRec] = useState();
	const navigate = useNavigate();
	const location = useLocation();
	const ownerResults = allResults.filter((rec) => rec.owner === user.email);

	return (
		<div>
			<h1>Your Recommendations</h1>
			{/* {ownerResults.map((rec) => (
				<UserRec rec={rec} lang={lang} key={rec._id} />
			))} */}
			{/* Temporarily showing all */}
			{allResults.map((rec) => (
				<UserRec rec={rec} lang={lang} key={rec._id} />
			))}
		</div>
	);
}

export default UserRecList;
