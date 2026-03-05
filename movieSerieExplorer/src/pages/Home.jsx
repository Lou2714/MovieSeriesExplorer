import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";

import { getTopRatedMovies, discoverMoviesByGenreId } from "../services/moviesServices";
import { getPopularTvSeries, discoverTvSeriesByGenreId } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";

const Home = () => {

    const [topRatedMovies, setTopRatedMovies] = useState(null);
    const [popularSeries, setPopularMovies] = useState(null);
    const [terrorMovies, setTerrorMovies] = useState(null);
    const [mysterySeries, setMysterySeries] = useState(null);

    useEffect(() =>{
        showTopRatedMovies();
        showPopularSeries();
        showMoviesByGenre();
        showSeriesByGenre();
    },[topRatedMovies,popularSeries, terrorMovies, mysterySeries]);

    const showTopRatedMovies = () =>{
        getTopRatedMovies(1,"es").then((res) =>{
            setTopRatedMovies(res);
        })
    }

    const showPopularSeries = () =>{
        getPopularTvSeries(2, "es").then((res) =>{
            setPopularMovies(res);
        })
    }

    const showMoviesByGenre = () =>{
        discoverMoviesByGenreId(27, "es", 1).then((res) =>{
            setTerrorMovies(res);
        })
    }
    
    const showSeriesByGenre = () =>{
        discoverTvSeriesByGenreId(9648,"es",1).then((res) => {
            setMysterySeries(res);
        })
    }

    return(
        <div>
            <Navbar />
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Inicio</h1>
            <div className="pb-5">
                <CategorySection title={"Películas recomendadas"} mediaResource={topRatedMovies}/>
                <CategorySection title={"Series populares"} mediaResource={popularSeries}/>
                <CategorySection title={"Películas que te harán gritar"} mediaResource={terrorMovies}/>
                <CategorySection title={"El misterio te espera"} mediaResource={mysterySeries}/>
            </div>
        </div>
    )
}

export default Home;