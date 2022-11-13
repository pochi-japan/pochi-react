import UserRec from './UserRec';

function UserRecList({ allResults, user, token, lang }) {
	console.log('useremail', user.email);

	const ownerResults = allResults.filter((rec) => rec.owner === user.email);

	console.log('ownerResults', ownerResults);
	console.log('token', token);

	return (
		<div>
			<h1>Your Recommendations</h1>
			{token ? <h2>Token is working</h2> : null}
			{ownerResults.map((rec) => (
				<UserRec rec={rec} lang={lang} key={rec._id} />
			))}
		</div>
	);
}

export default UserRecList;
