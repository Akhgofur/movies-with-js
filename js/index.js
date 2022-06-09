const elMoviesList = selectElement(".movies__list")
const elMovieTemplate = selectElement("#movie-template").content

const elGenreSelect = selectElement(".filter-form__select")

const elMovieSearch = selectElement(".filter-form__search-input")

function renderGenreList(genre, element){
    const newLi = createDOM("li")
    newLi.className = "movie-card__genre badge"
    newLi.textContent = genre
    element.append(newLi)
}

function renderMoviesList(moviesArr, element) {
    element.innerHTML = null;
    
    moviesArr.forEach(item => {
        const movieTemplate = elMovieTemplate.cloneNode(true);
        selectElement(".movie-card__poster", movieTemplate).src = item.poster
        selectElement(".movie-card__link", movieTemplate).textContent = item.title
        selectElement(".movie-card__link", movieTemplate).href = item.title
        selectElement(".movie-card__overview", movieTemplate).textContent = item.overview
        
        item.genres.forEach((genre) => {
            renderGenreList(genre,
                selectElement(".movie-card__genres", movieTemplate))
        })

        selectElement(".movie-card__release-date", movieTemplate).textContent = getTime(item.release_date)
        
        element.append(movieTemplate)
    });
}
function renderGenresSelect(array, element) {
    array.forEach((item) => {
        const newGenreOpt = createDOM("option")
        newGenreOpt.textContent = item
        newGenreOpt.value = item
        element.append(newGenreOpt)
    })
}

renderGenresSelect(genresList, selectElement(".filter-form__select"))
renderMoviesList(films, elMoviesList)

function submitted(evt) {
    evt.preventDefault()
    if(elMovieSearch.value.trim() !== ''){
        let regex = new RegExp(elMovieSearch.value, 'gi')
        const searchedArr = films.filter(item => item.title.match(regex))
        renderMoviesList(searchedArr, elMoviesList)
    }
    else {
        if(elGenreSelect.value === "All") {
            renderMoviesList(films, elMoviesList)
            return
        }
        
        const filteredArr = films.filter(item => item.genres.includes(elGenreSelect.value))
        renderMoviesList(filteredArr, elMoviesList)
    }
}

selectElement("#filter-form").addEventListener('submit', submitted)