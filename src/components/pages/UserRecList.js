import UserRec from './UserRec';

function UserRecList({ allResults, user, lang, token }) {
	const usersEmail = localStorage.getItem('email');
	const ownerResults = allResults.filter((rec) => rec.owner === usersEmail);

	return (
		<div>
			{lang ? (
				<h1>Your Recommendations</h1>
			) : (
				<h1 className='日本'>ユーザーのおすすめ</h1>
			)}
			{ownerResults.map((ownersRec) => (
				<UserRec
					ownersRec={ownersRec}
					lang={lang}
					key={ownersRec._id}
					token={token}
				/>
			))}
		</div>
	);
}

export default UserRecList;
