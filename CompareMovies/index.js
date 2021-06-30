//TODO
// Fetch Data about Movie -> API
// build an autocomplete widget from scratch


const fetchData = async () => {
	// we will wait for the response
	const response = await axios.get('http://www.omdbapi.com', {
		params: {
			apikey: '783e8d68',
			s: 'avengers'
		}
	});
	console.log(response.data);
};

fetchData();
