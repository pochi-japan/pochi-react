import { Link } from 'react-router-dom';
import pochiNoImage from '../../images/pochi-noimage.png';

function MainResults({ allResults, lang }) {
	// ******* VARIABLES *******
	// Save allResults to a new variable so it doesn't mutate allResults for other pages
	let randomResults = allResults;

	// Function to shuffle the results
	let shuffledResults = randomResults.sort(function () {
		return Math.random() - 0.5;
	});

	// ******* RETURN *******
	return (
		<section>
			{lang ? (
				<div>
					<h1 className='en'>Welcome to Pochi</h1>
					<h3>A recommendations place for all things Japan!</h3>
				</div>
			) : (
				<div>
					<h1 className='ポチ 日本'>ポチへようこそ</h1>
					<h3>日本でのおすすめ色々！</h3>
				</div>
			)}
			<div className='main'>
				{/* Limit random results to 10 images, set fallback image if image is null or gives an invalid image */}
				{shuffledResults.slice(0, 9).map((res) => {
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

export default MainResults;
