const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const options = {
    headers: {
        "Authorization": `Bearer ${API_KEY}`
    }
}

export const searchMulti = (query, language, page) =>{
    const request = fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&language=${language}&page=${page}`, options);
    const response = request.then((res) =>{
        return res.json();
    })
    return response;
}