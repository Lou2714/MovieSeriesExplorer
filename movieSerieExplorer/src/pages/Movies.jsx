import PosterCard from "../components/PosterCard";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";
import Spinner from "../components/Feedback/Spinner";
import ErrorMessage from "../components/Feedback/ErrorMessage";

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

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const genreIdSelected = Number(searchParams.get("genre")) || 0;

    useEffect(() =>{
        setIsLoading(true);
        setHasError(false);
        setErrorMessage("");
        fetchAllData();
    },[]);

    useEffect(() =>{
        setIsLoading(true);
        setHasError(false);
        setErrorMessage("");
        showMoviesByGenre(genreIdSelected, setMoviesByGenres, 1)
            .catch((error) => {
                setHasError(true);
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));

    },[searchParams]);

    const fetchAllData = () =>{
        Promise.all([
            getGenres(),
            showTopRatedMovies(),
            showMoviesByGenre(18,setDramaMovies, 4),
            showMoviesByGenre(10751,setFamilyMovies, 3)
        ])
        .catch((error) => {
            setHasError(true);
            setErrorMessage(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    const getGenres = () =>{
        return getMoviesGenres("es")
            .then((res) =>{
                setMovieGenres(res.genres);
        })
    }

    const showTopRatedMovies = () => {
        return getTopRatedMovies(5,"es").then((res) => {
            setTopRatedMovies(res.results);
        })
    }

    const showMoviesByGenre = (genreId, setter, page) =>{
        return discoverMoviesByGenreId(genreId, "es", page).then((res) =>{
            setter(res.results);
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
    

    return(
        <div className="px-5 md:px-8 lg:px-16">
            <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl text-Wild-Sand-100">Películas</h1>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <div>
                        <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-5/6 m-auto lg:w-full lg:pt-8 custom-scrollbar">
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
                            hasError ? (
                                <ErrorMessage message={errorMessage} />
                            ) : (
                                genreIdSelected == 0 ? (
                                    <div className="pb-5 lg:pt-6">
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
                            )
                        }
                        
                    </div>
                )
            }
        </div>
    )
}

export default Movies;