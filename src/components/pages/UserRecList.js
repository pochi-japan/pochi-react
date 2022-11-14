import UserRec from './UserRec';
import { useNavigate, useLocation } from 'react-router-dom';

function UserRecList({ allResults, user, lang }) {
	const navigate = useNavigate();
	const location = useLocation();
	const ownerResults = allResults.filter((rec) => rec.owner === user.email);

	return (
		<div>
			{lang ? (
				<h1>Your Recommendations</h1>
			) : (
				<h1 className='日本'>ユーザーのおすすめ</h1>
			)}
			{allResults.map((rec) => (
				<UserRec rec={rec} lang={lang} key={rec._id} />
			))}
		</div>
	);
}

export default UserRecList;
