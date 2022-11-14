import { useNavigate, useLocation } from 'react-router-dom';
import UserRecList from './UserRecList';

function PlacesRecList({ allResults, lang }) {
	const navigate = useNavigate();
	const location = useLocation();
	const placesResults = allResults.filter((rec) => rec.category === 'place');

	return (
		<div>
			{lang ? <h1>Places</h1> : <h1 className='日本'>場所</h1>}
			{/* {placesResults.map((rec) => (
				<UserRecList rec={rec} lang={lang} key={rec._id} />
			))} */}
		</div>
	);
}

export default PlacesRecList;
