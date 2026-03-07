import PosterCard from "../components/PosterCard";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";

import { getMoviesGenres, getTopRatedMovies, discoverMoviesByGenreId } from "../services/moviesServices";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [movieGenres, setMovieGenres] = useState(null);
    const [topRatedMovies, setTopRatedMovies] = useState(null);
    const [dramaMovies, setDramaMovies] = useState(null);
    const [familyMovies, setFamilyMovies] = useState(null);
    const [moviesByGenres, setMoviesByGenres] = useState(null);

    const genreIdSelected = Number(searchParams.get("genre")) || 0;

    useEffect(() =>{
        getGenres();
        showTopRatedMovies();
        showMoviesByGenre(18,setDramaMovies, 4);
        showMoviesByGenre(10751,setFamilyMovies, 3);
        showFilteredMovies();

    },[moviesByGenres, searchParams]);

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

    const handlerClickFilterBtn = (genreId) =>{
        //Si el id es cero se limpia el parámetro, para que no muestre ?genre=0, { replace: true } es para que no se cree tanto historial
        if (genreId == 0) {
            setSearchParams({});
        }else{
            setSearchParams({ genre: genreId }, { replace: true });
        }
    }

    const showFilteredMovies = () =>{
        showMoviesByGenre(genreIdSelected, setMoviesByGenres, 1);
    }


    return(
        <div>
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Películas</h1>
            <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-4/5 m-auto">
                <CategoryFilterBtn category={"Destacados"} categoryId={0} categoryIdSelected={genreIdSelected} onclickFilterBtn={handlerClickFilterBtn}/>
                {
                    movieGenres?.map((genre) =>(
                        <CategoryFilterBtn 
                            key={genre.id} 
                            category={genre.name} 
                            categoryId={genre.id}
                            categoryIdSelected={genreIdSelected}
                            onclickFilterBtn={handlerClickFilterBtn}/>
                    ))
                }
            </div>
            {
                genreIdSelected == 0 ? (
                    <div className="pb-5">
                        <CategorySection title={"Películas que te recomendamos ver"} mediaResource={topRatedMovies} mediaType={"movies"}/>
                        <CategorySection title={"Películas que te harán llorar"} mediaResource={dramaMovies} mediaType={"movies"}/>
                        <CategorySection title={"Películas para ver en familia"} mediaResource={familyMovies} mediaType={"movies"}/>
                    </div>
                ) : (
                    <div className="flex flex-row flex-wrap justify-center-safe gap-y-2 py-5">
                        {
                            moviesByGenres?.map((movie) => (
                                <PosterCard key={movie.id} mediaId={movie.id} mediaType={"movies"} poster={movie.poster_path}/>
                            ))
                        }
                    </div>
                )
            }
            
        </div>
    )
}

export default Movies;