const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const options = {
    headers: {
        "Authorization": `Bearer ${API_KEY}`
    }
}

export const getTvSeriesGenres = (language) =>{
    const request = fetch(`https://api.themoviedb.org/3/genre/tv/list?language=${language}`, options);
    const response = request.then((res) =>{
        return res.json();
    })
    return response;
}

export const getPopularTvSeries = (page,language) =>{
    const request = fetch(`https://api.themoviedb.org/3/tv/popular?language=${language}&page=${page}`, options);
    const response = request.then((res) =>{
        return res.json();
    })
    return response;
}

export const getTvSerieById = (serieId, language) =>{
    const request = fetch(`https://api.themoviedb.org/3/tv/${serieId}?language=${language}`, options);
    const response = request.then((res) =>{
        return res.json();
    })
    return response;
}
