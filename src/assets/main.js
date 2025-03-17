const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCZGYJFUizSax-yElQaFDp5Q&filter=videos_latest&hl=en&gl=US';

const content =  document.getElementById('content')  ||null ;

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


const fetchRequest = async ( ) => {
    const videos =  await fetchData(API);
    console.log(videos);
    let view = videos.contents
    .slice(0, 8)
    .map(video => `
        <div class="group relative">
            <div class="w-full bg-black aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.video.thumbnails[0].url}" alt="${video.video.title}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    // ${video.video.title}
                </h3>
            </div>
        </div>
    `)
    .join('');

content.innerHTML = view;
        

}

fetchRequest().then((res)=> {
    console.log("the request", res)
}).catch((err)=>{
    
})
