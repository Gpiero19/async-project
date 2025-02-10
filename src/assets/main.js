const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&filter=videos_latest&hl=en&gl=US';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3299f0c386msh17280b35e5be3a5p1b26cbjsndaab8dce07a6',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
	const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
	    const videos = await fetchData(API);
	    console.log(videos);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <div
                class="w-full bg-black aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
            </div>
            `).slice(0,4).join('')}
            `;
} catch (error) {
	console.error(error);
}});