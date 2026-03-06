import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";

import { getMoviesGenres, getTopRatedMovies, discoverMoviesByGenreId } from "../services/moviesServices";

import { useState, useEffect } from "react";

const Movies = () => {

    const [movieGenres, setMovieGenres] = useState(null);
    const [topRatedMovies, setTopRatedMovies] = useState(null);
    const [dramaMovies, setDramaMovies] = useState(null);
    const [familyMovies, setFamilyMovies] = useState(null);

    useEffect(() =>{
        getGenres();
        showTopRatedMovies();
        showMoviesByGenre(18,setDramaMovies, 4);
        showMoviesByGenre(10751,setFamilyMovies, 3);
    },[]);

    const getGenres = () =>{
        getMoviesGenres("es")
            .then((res) =>{
                setMovieGenres(res.genres);
        }).catch((error) =>{
            console.error(error);
        })
    }

    const showTopRatedMovies = () => {
        getTopRatedMovies(5,"es").then((res) => {
            setTopRatedMovies(res);
        }).catch((error) =>{
            console.error(error);
        })
    }

    const showMoviesByGenre = (genreId, setter, page) =>{
        discoverMoviesByGenreId(genreId, "es", page).then((res) =>{
            setter(res);
        }).catch((error) =>{
            console.error(error);
        })
    }

    return(
        <div>
            {/* <Navbar /> */}
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Películas</h1>
            <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-4/5 m-auto">
                <CategoryFilterBtn category={"Destacados"}/>
                {
                    movieGenres?.map((genre) =>(
                        <CategoryFilterBtn key={genre.id} category={genre.name}/>
                    ))
                }
            </div>
            <div className="pb-5">
                <CategorySection title={"Películas que te recomendamos ver"} mediaResource={topRatedMovies} mediaType={"movies"}/>
                <CategorySection title={"Películas que te harán llorar"} mediaResource={dramaMovies} mediaType={"movies"}/>
                <CategorySection title={"Películas para ver en familia"} mediaResource={familyMovies} mediaType={"movies"}/>
            </div>
        </div>
    )
}

export default Movies;