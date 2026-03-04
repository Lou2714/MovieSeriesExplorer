import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";

import { getMoviesGenres } from "../services/moviesServices";

import { useState, useEffect } from "react";

const Movies = () => {

    const [movieGenres, setMovieGenres] = useState(null);

    useEffect(() =>{
        getGenres();
    },[]);

    const getGenres = () =>{
        getMoviesGenres("es")
            .then((res) =>{
                setMovieGenres(res.genres);
        })
    }

    return(
        <div>
            <Navbar />
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Películas</h1>
            <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-4/5 m-auto">
                {
                    movieGenres?.map((genre) =>(
                        <CategoryFilterBtn key={genre.id} category={genre.name}/>
                    ))
                }
            </div>
            <div className="pb-5">
                <CategorySection />
                <CategorySection />
                <CategorySection />
            </div>
        </div>
    )
}

export default Movies;