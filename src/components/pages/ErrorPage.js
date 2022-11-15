function ErrorPage({ lang }) {
	return (
		<div className='error-container'>
			<div className='error container'>
				{lang ? (
					<h1>Page Not Found!</h1>
				) : (
					<h1 className='日本'>ページが見つかりませんでした</h1>
				)}
			</div>
		</div>
	);
}

export default ErrorPage;
