//TODO
// Fetch Data about Movie -> API
// build an autocomplete widget from scratch
// API KEY: 783e8d68

// to make it more reusable, every autocomplete has a Option Function
// if we want to use another autocomplete Component, we only have
// to change the Option in createAutoComplete
createAutoComplete({
	root: document.querySelector('.autocomplete'),
	renderOption: (movie) => {
		// Show no Poster if not avaliable
		const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
		return `<img src="${imgSrc}" />
		${movie.Title} (${movie.Year})`;
	},
	onOptionSelect: (movie) => {
		onMovieSelect(movie);
	},
	inputValue: (movie) => {
		return movie.Title;
	},
	fetchData: async (searchTerm) => {
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
	}
});

const onMovieSelect = async (movie) => {
	console.log(movie);
	const response = await axios.get('http://www.omdbapi.com', {
		params: {
			apikey: '783e8d68',
			i: movie.imdbID
		}
	});
	console.log(response.data);

	const summary = document.querySelector('#summary');
	document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};

const movieTemplate = (movieDetail) => {
	return `<article class="media">
				<figure class="media-left">
					<p class="image">
						<img src="${movieDetail.Poster}"
					</p>
				</figure>
				<div class="media-content>">
					<div class="content">
						<h1>${movieDetail.Title}</h1>
						<h6>${movieDetail.Genre}</h6>
						<p>${movieDetail.Plot}</p>
					</div>
				</div>
			</article>
			<article class="notification is-primary">
				<p class="title">${movieDetail.Awards}</p>
				<p class="subtitle">Awards</p>
			</article>
			<article class="notification is-primary">
				<p class="title">${movieDetail.BoxOffice}</p>
				<p class="subtitle">BoxOffice</p>
			</article>
			<article class="notification is-primary">
				<p class="title">${movieDetail.Metascore}</p>
				<p class="subtitle">Metascore</p>
			</article>
			<article class="notification is-primary">
				<p class="title">${movieDetail.imdbRating}</p>
				<p class="subtitle">IMDB Rating</p>
			</article>
			<article class="notification is-primary">
				<p class="title">${movieDetail.imdbVotes}</p>
				<p class="subtitle">IMDB Votes</p>
			</article>

	`;
};
