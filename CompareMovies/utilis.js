// If the user start tipping, the setTimeOut Method will wait 1 Sec delay before show the result
// to prevent to many requests.
// If the user start tipping the event occur and will set up a request, debounce will Kill the request if the User is still tipping

const debounce = (func, delay) => {
	let timeOutId;
	return (...args) => {
		if (timeOutId) {
			clearTimeout(timeOutId);
		}
		timeOutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};
