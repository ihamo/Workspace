

const fetchData = async (searchTerm) => {
	// we will wait for the response
	console.log(searchTerm);
	const response = await axios.get('http://www.omdbapi.com', {
		params: {
			apikey: '783e8d68',
			s: searchTerm
		}
	});
	console.log(response.data);
};

const SearchInput = document.querySelector('#SearchInput');

// If the user start tipping, the setTimeOut Method will wait 2 Sec before show the result
// to prevent to many requests.
// If the user start tipping the event occur and will set up a request, we will Kill the request if the User is still tipping

const debounce = (func) => {
	let timeOutId;
	return (...args) => {
		if (timeOutId) {
			clearTimeout(timeOutId);
		}
		timeOutId = setTimeout(() => {
			func.apply(null, args);
		}, 2000);
	};
};

// Event Function
const onInput = debounce((event) => {
	// event.target.value -> input value
	// pass the input value as an argument
	fetchData(event.target.value);
});

// EventListener, passed the Event Function
SearchInput.addEventListener('input', onInput);

// Same Function like above
// const onInput = (event) => {
// 	fetchData(event.target.value);
// };

// SearchInput.addEventListener('input', debounce(onInput));
