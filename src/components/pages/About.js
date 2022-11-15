function About({ lang }) {
	return (
		<div className='about'>
			{lang ? (
				<div>
					<div className='fit'>
						<hr />
						<h1>What is Pochi?</h1>
						<h2>
							Pochi serves as a recommendation app for all places and things
							Japan related. You can search via the category places and things
							in the nav bar, sign up and log in to create a recommendation and
							manage your recommendations on your page (edit button is currently
							being worked on). You can rate your recommendation a level of 1 to
							3 with 3 being a must go to/try! You can click on any name/image
							in the Home/Places/Things pages to see more details about the
							recommendation. You can also search for results that match the
							name or description of whatever you are looking for.
						</h2>
						<h1>The creators</h1>
						<h2>Ai & Trey are the creators of Pochi.</h2>
						<h2>
							Ai was inspired to create this app as many of her friends and
							family ask her for recommendations in Japan, and this project was
							a good opportunity to create a site that she could send them to
							with some of her recommendations, as well as an opportunity for
							others to add their recommendations. Since Trey and Ai worked so
							well on a different project, and he had a background of
							Japanese/Japan, Ai recruited him to join her team!
						</h2>
						<br />
						<hr />
					</div>
				</div>
			) : (
				<div className='fit'>
					<hr />
					<h1>ポチって何？</h1>
					<h2>
						ポチは日本に関してのおすすめスポットやものを検索できるアプリです。場所やもののカテゴリーで検索できます。自分のおすすめを追加と削除することが可能です（修正ボタンは作成中です）。おすすめリストの名前か写真をクリックするとおすすめの内容が見れます。自分のおすすめは１から３までのレーティングを追加できます。検索バーに入力すると内容検索に対してのおすすめリストが見れます。
					</h2>
					<h1>クリエーター</h1>
					<h2>愛とトレイがポチのクリエーターです。</h2>
					<h2>
						愛の友達や家族が日本でのおすすめスポットやものをよく聞いてくるのでこのアプリを作成することにしました。トレイとは以前のプロジェクトで仲良くなった上、日本語と日本に関してのバックグランドを持っていたのでチームを組むことになりました。
					</h2>
					<br />
					<hr />
				</div>
			)}
		</div>
	);
}

export default About;
