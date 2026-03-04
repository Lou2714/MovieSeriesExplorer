const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const options = {
    headers: {
        "Authorization": `Bearer ${API_KEY}`
    }
}

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
    })
    return response;
}