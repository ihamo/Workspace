//TODO
// Fetch Data about Movie -> API
// build an autocomplete widget from scratch
// API KEY: 783e8d68

const fetchData = async (searchTerm) => {
	// we will wait for the response
	console.log(searchTerm);
	const response = await axios.get('http://www.omdbapi.com', {
		params: {
			apikey: '783e8d68',
			s: searchTerm
		}
	});
	console.log(response.data.Search);
	return response.data.Search;
};

const SearchInput = document.querySelector('#SearchInput');

// Event Function
const onInput = async (event) => {
	// event.target.value -> input value
	// pass the input value as an argument
	const movies = await fetchData(event.target.value);

	for (let movie of movies) {
		const div = document.createElement('div');
		div.innerHTML = `<img src="${movie.Poster}" />
		<h1>${movie.Title}</h1>`;

		document.querySelector('#target').appendChild(div);
	}
};

// EventListener, passed the Event Function
SearchInput.addEventListener('input', debounce(onInput, 1000));

// Same Function like above
// const onInput = (event) => {
// 	fetchData(event.target.value);
// };

// SearchInput.addEventListener('input', debounce(onInput));
