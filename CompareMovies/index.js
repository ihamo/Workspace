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

	// if the Response give us an error, cause no Movie was found
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

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

// Event Function
const onInput = async (event) => {
	// event.target.value -> input value
	// pass the input value as an argument
	const movies = await fetchData(event.target.value);

	// Close dropdown when input is empty after a search
	if (!movies.length) {
		dropdown.classList.remove('is-active');
		return;
	}
	// open dropdown to show results
	dropdown.classList.add('is-active');
	// clear results before do a new search
	resultsWrapper.innerHTML = '';

	// for every Movie entrie create an anchor element
	for (let movie of movies) {
		const option = document.createElement('a');
		// Show no Poster if not avaliable
		const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

		option.classList.add('dropdown-item');
		option.innerHTML = `<img src="${imgSrc}" />
		${movie.Title}`;

		// EventListening for a Click on a Item in the Dropdown Menu
		option.addEventListener('click', (event) => {
			// close dropdown when user click on an Item in the dropdown
			dropdown.classList.remove('is-active');
			// when a user click on a item in the dropdown menu, change
			// the input value to the Title of that Movie
			input.value = movie.Title;
			console.log(event.target);
		});

		resultsWrapper.appendChild(option);
	}
};

// EventListener, passed the Event Function
input.addEventListener('input', debounce(onInput, 1000));

// close dropdown menu whenever user click outside the dropdown root element
document.addEventListener('click', (event) => {
	if (!root.contains(event.target)) {
		dropdown.classList.remove('is-active');
	}
});

// Same Function like above
// const onInput = (event) => {
// 	fetchData(event.target.value);
// };

// SearchInput.addEventListener('input', debounce(onInput));
