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

	// if the Response give us an error
	if (response.data.Error) {
		console.log('no Movies found');
		return [];
	}

	console.log(response.data.Search);
	return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
<label><b>Search for a Movie</b></label>
<input class="input" />
<div class="dropdown">
	<div class="dropdown-menu">
		<div class="dropdown-content results"</div>
	</div>
</div>
`;

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
