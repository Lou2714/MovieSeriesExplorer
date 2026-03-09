import CategorySection from "../components/CategorySection";
import Spinner from "../components/Feedback/Spinner";

import { getTopRatedMovies, discoverMoviesByGenreId } from "../services/moviesServices";
import { getPopularTvSeries, discoverTvSeriesByGenreId } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";

const Home = () => {

    const [topRatedMovies, setTopRatedMovies] = useState(null);
    const [popularSeries, setPopularMovies] = useState(null);
    const [terrorMovies, setTerrorMovies] = useState(null);
    const [mysterySeries, setMysterySeries] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        setIsLoading(true);
        fetchAllData();
    },[]);

    const fetchAllData = () =>{
        Promise.all([
            showTopRatedMovies(1),
            showPopularSeries(2),
            showMoviesByGenre(27),
            showSeriesByGenre(9648)
        ]).finally(() => {
            setIsLoading(false);
        });
    }

    const showTopRatedMovies = (page) =>{
        return getTopRatedMovies(page,"es").then((res) =>{
            setTopRatedMovies(res);
        })
    }

    const showPopularSeries = (page) =>{
        return getPopularTvSeries(page, "es").then((res) =>{
            setPopularMovies(res);
        })
    }

    const showMoviesByGenre = (genreId) =>{
        return discoverMoviesByGenreId(genreId, "es", 1).then((res) =>{
            setTerrorMovies(res);
        })
    }
    
    const showSeriesByGenre = (genreId) =>{
        return discoverTvSeriesByGenreId(genreId,"es",1).then((res) => {
            setMysterySeries(res);
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