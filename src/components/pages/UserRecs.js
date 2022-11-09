import UserRecForm from "./UserRecForm";


function UserRecs({ user, JWT }) {
    console.log('user', user)
    console.log('JWTTT', JWT)
	return (
		<div>
			User Recs
			<UserRecForm user={user} />
		</div>
	);
}

export default UserRecs;
