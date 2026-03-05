import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";

import { getTvSeriesGenres, getTopRatedTvSeries, discoverTvSeriesByGenreId } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";

const TVSeries = () => {

    const [tvSeriesGenres, setTvSeriesGenres] = useState(null);
    const [topRatedSeries, setTopRatedSeries] = useState(null);
    const [crimeSeries, setCrimeSeries] = useState(null);
    const [actionSeries, setActionSeries] = useState(null);

    useEffect(() => {
        getSeriesGenres();
        showTopRatedSeries(1);
        showSeriesByGenre(80, setCrimeSeries, 1);
        showSeriesByGenre(10759, setActionSeries, 2);
    },[]);

    const getSeriesGenres = () =>{
        getTvSeriesGenres("es").then((res) =>{
            setTvSeriesGenres(res.genres);
        })
    }
    const showTopRatedSeries = (page) =>{
        getTopRatedTvSeries(page, "es").then((res) =>{
            setTopRatedSeries(res);
        }).catch((error) =>{
            console.error(error);
        })
    }
    const showSeriesByGenre = (genreId, setter, page) =>{
        discoverTvSeriesByGenreId(genreId, "es", page).then((res) =>{
            setter(res);
        }).catch((error) =>{
            console.error(error);
        })
    }

    return(
        <div>
            <Navbar />
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Series</h1>
            <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-4/5 m-auto">
            <CategoryFilterBtn category={"Destacados"}/>
            {
                tvSeriesGenres?.map((serie) =>(
                    <CategoryFilterBtn key={serie.id} category={serie.name}/>
                ))
            }
            </div>
            <div className="pb-5">
                <CategorySection title={"Series que no te puedes perder"} mediaResource={topRatedSeries} />
                <CategorySection title={"Acción y aventura"} mediaResource={actionSeries} />
                <CategorySection title={"Series de crimen"} mediaResource={crimeSeries} />
            </div>
        </div>
    )
}

export default TVSeries;