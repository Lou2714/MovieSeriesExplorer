import PosterCard from "../components/PosterCard";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";
import Spinner from "../components/Feedback/Spinner";

import { getTvSeriesGenres, getTopRatedTvSeries, discoverTvSeriesByGenreId } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";


const TVSeries = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [tvSeriesGenres, setTvSeriesGenres] = useState(null);
    const [topRatedSeries, setTopRatedSeries] = useState(null);
    const [crimeSeries, setCrimeSeries] = useState(null);
    const [actionSeries, setActionSeries] = useState(null);
    const [seriesByGenres, setSeriesByGenres] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const genreIdSelected = Number(searchParams.get("genre")) || 0;

    useEffect(() => {
        setIsLoading(true);
        fetchAllData();
    },[]);

    useEffect(() => {
        setIsLoading(true);
        showFilteredSeries().finally(() => setIsLoading(false));
    },[searchParams]);

    const fetchAllData = () => {
        Promise.all([
            getSeriesGenres(),
            showTopRatedSeries(1),
            showSeriesByGenre(80, setCrimeSeries, 1),
            showSeriesByGenre(10759, setActionSeries, 2)
        ]).finally(() => {
            setIsLoading(false);
        });
    }

    const getSeriesGenres = () =>{
        return getTvSeriesGenres("es").then((res) =>{
            setTvSeriesGenres(res.genres);
        })
    }
    const showTopRatedSeries = (page) =>{
        return getTopRatedTvSeries(page, "es").then((res) =>{
            setTopRatedSeries(res);
        })
    }
    const showSeriesByGenre = (genreId, setter, page) =>{
        return discoverTvSeriesByGenreId(genreId, "es", page).then((res) =>{
            setter(res);
        })
    }
    const handlerClickFilterBtn = (genreId) =>{
        if (genreId == 0) {
            setSearchParams({});
        }else{
            setSearchParams({ genre: genreId }, { replace: true });
        }
    }

    const showFilteredSeries = () =>{
        return showSeriesByGenre(genreIdSelected, setSeriesByGenres, 1);
    }

    return(
        <div>
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Series</h1>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <div>
                        <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-4/5 m-auto">
                        <CategoryFilterBtn category={"Destacados"} categoryId={0} categoryIdSelected={genreIdSelected} onclickFilterBtn={handlerClickFilterBtn}/>
                        {
                            tvSeriesGenres?.map((serie) =>(
                                <CategoryFilterBtn 
                                    key={serie.id} 
                                    category={serie.name} 
                                    categoryId={serie.id}
                                    categoryIdSelected={genreIdSelected}
                                    onclickFilterBtn={handlerClickFilterBtn}/>
                            ))
                        }
                        </div>
                        {
                            genreIdSelected == 0 ? (
                                <div className="pb-5">
                                    <CategorySection title={"Series que no te puedes perder"} mediaResource={topRatedSeries} mediaType={"tvseries"}/>
                                    <CategorySection title={"Acción y aventura"} mediaResource={actionSeries} mediaType={"tvseries"}/>
                                    <CategorySection title={"Series de crimen"} mediaResource={crimeSeries} mediaType={"tvseries"}/>
                                </div>
                            ) : (
                                <div className="flex flex-row flex-wrap justify-center-safe gap-y-2 py-5">
                                    {
                                        seriesByGenres?.map((series) => (
                                            <PosterCard key={series.id} mediaId={series.id} mediaType={"tvseries"} poster={series.poster_path}/>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                )
            }
            
        </div>
    )
}

export default TVSeries;