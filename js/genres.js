let genresList = []
for (const film of films) {
    const genres = film.genres
    for (const genre of genres) {
        if(genresList.includes(genre)){
            continue
        }
        genresList.push(genre)
    }
}

