import { Link } from 'react-router-dom';
import pochiNoImage from '../../images/pochi-noimage.png';

function PlacesRecList({ allResults, lang }) {
	// ******* VARIABLE *******
	// Filtering out recommendations based on places category
	const placesResults = allResults.filter((rec) => rec.category === 'place');

	// ******* RETURN *******
	return (
		<section>
			{lang ? (
				<h1 className='en'>Recommended Places</h1>
			) : (
				<h1 className='ポチ 日本'>おすすめの場所</h1>
			)}
			<div className='main'>
				{placesResults.slice(0, 30).map((res) => {
					return (
						<div className='card' key={`${res.name}-card`}>
							<div className='results-img'>
								<Link to={`/detail/:${res._id}`} key={res.name}>
									<button className='card-butt'>{res.name}</button>
									<br />
									<div className='anime animate__animated animate__backInLeft'>
										<div className='anime2'>
											<img
												className='slideshow'
												src={res.picture1}
												onError={(e) => (e.currentTarget.src = pochiNoImage)}
												alt={res.name}
											/>
										</div>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default PlacesRecList;
