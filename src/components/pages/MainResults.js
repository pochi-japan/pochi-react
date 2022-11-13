import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainResults({ randomResults, error, lang }) {
	return (
		<section>
			{lang ? (
				<h1 className='en'>Welcome to Pochi</h1>
			) : (
				<h1 className='ポチ 日本'>ポチへようこそ</h1>
			)}
			<div className='main'>
				{/* Limit random results to 10 images, set fallback image if image is null or gives an invalid image */}
				{randomResults.slice(0, 9).map((res) => {
					return (
						<div className='card' key={`${res.name}-card`}>
							<div className='results-img'>
								<Link to={`/detail/:${res._id}`} key={res.name}>
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
									<br />
									<h1>
										<button>{res.name}</button>
									</h1>
								</Link>
							</div>
						</div>
					);
				})}
				{error ? <div>{error}</div> : <div>{''}</div>}
			</div>
		</section>
	);
}

export default MainResults;
