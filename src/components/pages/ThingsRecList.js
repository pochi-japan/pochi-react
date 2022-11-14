import { useNavigate, useLocation } from 'react-router-dom';
// import UserRecList from './UserRecList';

function ThingsRecList({ allResults, lang }) {
	const navigate = useNavigate();
	const location = useLocation();
	const thingsResults = allResults.filter((rec) => rec.category === 'thing');

	return (
		<div>
			{lang ? <h1>Things</h1> : <h1 className='日本'>もの</h1>}
			{/* {thingsResults.map((rec) => (
				<ThingRec rec={rec} lang={lang} key={rec._id} />
			))} */}
		</div>
	);
}

export default ThingsRecList;
