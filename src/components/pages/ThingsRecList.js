import { Link } from 'react-router-dom';
import { useState } from 'react';

function ThingsRecList({ allResults, lang }) {
	// ******* VARIABLE *******
	// Filtering out recommendations based on things category
	const thingsResults = allResults.filter((rec) => rec.category === 'thing');

	// ******* RETURN *******
	return (
		<section>
			{lang ? (
				<h1 className='en'>Recommended Things</h1>
			) : (
				<h1 className='ポチ 日本'>おすすめのもの</h1>
			)}
			<div className='main'>
				{thingsResults.slice(0, 30).map((res) => {
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
												onError={(e) =>
													(e.currentTarget.src =
														'https://media.giphy.com/media/qdFCb59rXKZ1K/giphy.gif')
												}
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

export default ThingsRecList;
