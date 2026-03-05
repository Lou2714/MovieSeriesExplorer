const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const options = {
    headers: {
        "Authorization": `Bearer ${API_KEY}`
    }
}
//Devuelve los generos de las peliculas
export const getMoviesGenres = (language) => {
    const request = fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}`, options);
    const response = request.then((res) =>{
        return res.json();
    })
    return response;
}

export const getMovieById = (movieId, language) =>{
    const request = fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=${language}`, options);
    const response = request.then((res) =>{
        return res.json();
    })
    return response;
}

export const getTopRatedMovies = (page, language) =>{
    const request = fetch(`https://api.themoviedb.org/3/movie/top_rated?language=${language}&page=${page}`, options);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) =>{
        return res.results
    })
    return response;
}

export const discoverMoviesByGenreId = (genreId, language, page) =>{
    const request = fetch(`https://api.themoviedb.org/3/discover/movie?language=${language}&page=${page}&with_genres=${genreId}&sort_by=popularity.desc`, options);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) =>{
        return res.results
    })
    
    return response;
}