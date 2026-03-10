import CategorySection from "../components/CategorySection";
import Spinner from "../components/Feedback/Spinner";
import ErrorMessage from "../components/Feedback/ErrorMessage";

import { getTopRatedMovies, discoverMoviesByGenreId } from "../services/moviesServices";
import { getPopularTvSeries, discoverTvSeriesByGenreId } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";

const Home = () => {

    const [topRatedMovies, setTopRatedMovies] = useState(null);
    const [popularSeries, setPopularMovies] = useState(null);
    const [terrorMovies, setTerrorMovies] = useState(null);
    const [mysterySeries, setMysterySeries] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() =>{
        setIsLoading(true);
        setHasError(false);
        setErrorMessage("");
        fetchAllData();
    },[]);

    const fetchAllData = () =>{
        Promise.all([
            showTopRatedMovies(1),
            showPopularSeries(2),
            showMoviesByGenre(27),
            showSeriesByGenre(9648)
        ])
        .catch((error) => {
            setHasError(true);
            setErrorMessage(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    const showTopRatedMovies = (page) =>{
        return getTopRatedMovies(page,"es").then((res) =>{
            setTopRatedMovies(res.results);
        })
    }

    const showPopularSeries = (page) =>{
        return getPopularTvSeries(page, "es").then((res) =>{
            setPopularMovies(res.results);
        })
    }

    const showMoviesByGenre = (genreId) =>{
        return discoverMoviesByGenreId(genreId, "es", 1).then((res) =>{
            setTerrorMovies(res.results);
        })
    }
    
    const showSeriesByGenre = (genreId) =>{
        return discoverTvSeriesByGenreId(genreId,"es",1).then((res) => {
            setMysterySeries(res.results);
        })
    }

    return(
        <div>
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Inicio</h1>
            {
                isLoading ? (
                    <div>
                        <Spinner />
                    </div>
                ) : hasError ? (
                    <ErrorMessage message={errorMessage}/>
                ) : (
                    <div className="pb-5">
                        <CategorySection title={"Películas recomendadas"} mediaResource={topRatedMovies} mediaType={"movies"}/>
                        <CategorySection title={"Series populares"} mediaResource={popularSeries} mediaType={"tvseries"}/>
                        <CategorySection title={"Películas que te harán gritar"} mediaResource={terrorMovies} mediaType={"movies"}/>
                        <CategorySection title={"El misterio te espera"} mediaResource={mysterySeries} mediaType={"tvseries"}/>
                    </div>
                )
            }
        </div>
    )
}

export default Home;