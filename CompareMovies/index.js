//TODO
// Fetch Data about Movie -> API
// build an autocomplete widget from scratch
// API KEY: 783e8d68

// to make it more reusable, every autocomplete has a Option Function
// if we want to use another autocomplete Component, we only have
// to change the Option in createAutoComplete

const autoCompleteConfig = {
	renderOption: (movie) => {
		// Show no Poster if not avaliable
		const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
		return `<img src="${imgSrc}" />
		${movie.Title} (${movie.Year})`;
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
};

createAutoComplete({
	// [...autoCompleteConfig] will copy all properties in autoCompleteConfig and use it in CreateAutoComplete
	...autoCompleteConfig,
	root: document.querySelector('#left-autocomplete'),
	onOptionSelect: (movie) => {
		document.querySelector('.tutorial').classList.add('is-hidden');
		onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
	}
});

createAutoComplete({
	// [...autoCompleteConfig] will copy all properties in autoCompleteConfig and use it in CreateAutoComplete
	...autoCompleteConfig,
	root: document.querySelector('#right-autocomplete'),
	onOptionSelect: (movie) => {
		document.querySelector('.tutorial').classList.add('is-hidden');
		onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
	}
});

let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryElement, side) => {
	console.log(movie);
	const response = await axios.get('http://www.omdbapi.com', {
		params: {
			apikey: '783e8d68',
			i: movie.imdbID
		}
	});
	console.log(response.data);

	summaryElement.innerHTML = movieTemplate(response.data);

	if (side === 'left') {
		leftMovie = response.data;
		document.querySelector('#left-summary').classList.add('left');
	} else {
		rightMovie = response.data;
	}

	if (leftMovie && rightMovie) {
		runComparison();
	}
};

const runComparison = () => {

	const leftSidestat = document.querySelectorAll('#left-summary .notification');
	const rightSidestat = document.querySelectorAll('#right-summary .notification');

	leftSidestat.forEach((leftStat, index) => {
		const rightStat = rightSidestat[index];

		console.log(leftStat, rightStat.dataset.value);
		if(rightStat.dataset.value < leftStat.dataset.value){
			rightStat.classList.remove('is-primary');
		}else{
			leftStat.classList.remove('is-primary');
		}
		
	});
};

const movieTemplate = (movieDetail) => {
	// For comparison reason we have to remove the dollar sign
	const dollar = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
	const metaScore = parseInt(movieDetail.Metascore);
	const imdbRating = parseInt(movieDetail.imdbRating.replace(/\./g, ''));
	const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
	const awards = movieDetail.Awards.split(' ').reduce((prev, word) =>{
		const value = parseInt(word);

		if(isNaN(value)){
			return prev
		}else {
			return prev + value;
		}
	}, 0);

	return `<article class="media">
				<figure class="media-left">
					<p class="image">
						<img src="${movieDetail.Poster}"
					</p>
				</figure>
				<div class="media-content">
					<div class="content">
						<h1>${movieDetail.Title}</h1>
						<h6>${movieDetail.Genre}</h6>
						<p>${movieDetail.Plot}</p>
					</div>
				</div>
			</article>
			<article data-value=${awards} class="notification is-primary">
				<p class="title">${movieDetail.Awards}</p>
				<p class="subtitle">Awards</p>
			</article>
			<article data-value=${dollar} class="notification is-primary">
				<p class="title">${movieDetail.BoxOffice}</p>
				<p class="subtitle">BoxOffice</p>
			</article>
			<article data-value=${metaScore} class="notification is-primary">
				<p class="title">${movieDetail.Metascore}</p>
				<p class="subtitle">Metascore</p>
			</article>
			<article data-value=${imdbRating} class="notification is-primary">
				<p class="title">${movieDetail.imdbRating}</p>
				<p class="subtitle">IMDB Rating</p>
			</article>
			<article data-value=${imdbVotes} class="notification is-primary">
				<p class="title">${movieDetail.imdbVotes}</p>
				<p class="subtitle">IMDB Votes</p>
			</article>

	`;
};
