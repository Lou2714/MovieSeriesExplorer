const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const options = {
    headers: {
        "Authorization": `Bearer ${API_KEY}`
    }
}
//Devuelve los generos de las series
export const getTvSeriesGenres = (language) =>{
    const request = fetch(`https://api.themoviedb.org/3/genre/tv/list?language=${language}`, options);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) => {
        if (res.success === false) {
            throw new Error("No se pudieron cargar los datos");
        }
        return res;
    })
    return response;
}

export const getPopularTvSeries = (page,language) =>{
    const request = fetch(`https://api.themoviedb.org/3/tv/popular?language=${language}&page=${page}`, options);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) => {
        if (res.success === false) {
            throw new Error("No se pudieron cargar los datos");
        }
        return res;
    })
    return response;
}

export const getTopRatedTvSeries = (page,language) =>{
    const request = fetch(`https://api.themoviedb.org/3/tv/top_rated?language=${language}&page=${page}`, options);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) => {
        if (res.success === false) {
            throw new Error("No se pudieron cargar los datos");
        }
        return res;
    })
    return response;
}

export const getTvSerieById = (serieId, language) =>{
    const request = fetch(`https://api.themoviedb.org/3/tv/${serieId}?language=${language}`, options);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) => {
        if (res.success == false) {
            throw new Error("La información de esta serie no está disponible.");
        }
        //retorna la promesa con la que trabajo en la parte visual
        return res;
    })
    return response;
}

export const discoverTvSeriesByGenreId = (genreId, language, page) =>{
    const request = fetch(`https://api.themoviedb.org/3/discover/tv?language=${language}&page=${page}&with_genres=${genreId}&sort_by=popularity.desc`, options);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) => {
        if (res.success === false) {
            throw new Error("No se pudieron cargar los datos");
        }
        return res;
    })
    
    return response;
}