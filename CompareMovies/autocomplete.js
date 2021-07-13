const createAutoComplete = ({ root }) => {
	root.innerHTML = `
        <label><b>Search for a Movie</b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"</div>
            </div>
        </div>
        `;

	const input = root.querySelector('input');
	const dropdown = root.querySelector('.dropdown');
	const resultsWrapper = root.querySelector('.results');

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
				// When a user click on a Movie
				onMovieSelect(movie);
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
};
