const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&filter=videos_latest&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3299f0c386msh17280b35e5be3a5p1b26cbjsndaab8dce07a6',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}