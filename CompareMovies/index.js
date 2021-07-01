//TODO
// Fetch Data about Movie -> API
// build an autocomplete widget from scratch
// API KEY: 783e8d68

// When you click, a click event is triggered. This event is actually an object containing information about the action that just happened.
// In this example's case, the event would have info such as the coordinates of the click (event.screenX for example),
// the element on which you clicked (event.target), and much more.
// Now, events happen all the time, however you are not interested in all the events that happen. When you are interested in some event however,
// it's when you add an event listener to the element you know will create events[1].
// For example you are interested in knowing when the user clicks on a 'Subscribe' button and you want to do something when this event happens.
// In order to do something about this event you bind an event handler to the button you are interested in.
// The way to bind the handler to the element is by doing element.addEventListener(eventName, handler).
// eventName is a string and it's the name of the event you are interested in, in this case that would be 'click' (for the click event).
// The handler is simply a function which does something (it's executed) when the event happens.
// The handler function, by default, when executed is passed the event object (that was created when the event/action you are interested in happened) as an argument.
// Defining the event as a parameter of your handler function is optional but, sometimes (most times),
// it is useful for the handler function to know about the event that happened.
// When you do define it this is the e you see in the functions like the ones you mentioned.
// Remember, the event is just a regular javascript object, with lots of properties on it.

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
