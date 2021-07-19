const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
	root.innerHTML = `
        <label><b>Search</b></label>
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
		const items = await fetchData(event.target.value);

		// Close dropdown when input is empty after a search
		if (!items.length) {
			dropdown.classList.remove('is-active');
			return;
		}
		// open dropdown to show results
		dropdown.classList.add('is-active');
		// clear results before do a new search
		resultsWrapper.innerHTML = '';

		// for every Movie entrie create an anchor element
		for (let item of items) {
			const option = document.createElement('a');

			option.classList.add('dropdown-item');
			option.innerHTML = renderOption(item);
			// EventListening for a Click on a Item in the Dropdown Menu
			option.addEventListener('click', (event) => {
				// close dropdown when user click on an Item in the dropdown
				dropdown.classList.remove('is-active');
				// when a user click on a item in the dropdown menu, change
				// the input value to the Title of that Movie
				input.value = inputValue(item);
				// When a user click on a Movie
				onOptionSelect(item);
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
