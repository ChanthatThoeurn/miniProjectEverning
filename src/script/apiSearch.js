// apiSearch.js
const url = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dc2074260cmsh58111d238e34e2bp1a3f73jsnd83d315e4ac5',
		'x-rapidapi-host': 'ott-details.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
async function searchMovies() {
    const query = searchInput.value.trim();
    if (!query) return;

    resultsContainer.innerHTML = '<p class="text-white col-span-full">Loading...</p>';

    try {
        const res = await fetch(`https://ott-details.p.rapidapi.com/search?title=${encodeURIComponent(query)}`, options);
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
            resultsContainer.innerHTML = '<p class="text-white col-span-full">No results found.</p>';
            return;
        }

        resultsContainer.innerHTML = '';

        data.results.forEach(movie => {
            const card = document.createElement('div');
            card.className = "relative group bg-[#1c1c1c] rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer";

            card.innerHTML = `
                <img src="${movie.imageurl || 'https://via.placeholder.com/300x450'}" alt="${movie.title}"
                    class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">
                        Watch Now
                    </button>
                </div>
                <div class="p-2">
                    <h3 class="text-sm font-semibold truncate">${movie.title}</h3>
                    <p class="text-xs text-gray-400">${movie.genre || 'Unknown Genre'}</p>
                    <p class="text-xs text-gray-400">IMDb: ${movie.imdb_rating || 'N/A'}</p>
                </div>
            `;

            resultsContainer.appendChild(card);
        });

    } catch (err) {
        console.error(err);
        resultsContainer.innerHTML = '<p class="text-white col-span-full">Error fetching data.</p>';
    }
}

// Event listeners
searchBtn.addEventListener('click', searchMovies);
searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') searchMovies();
});
