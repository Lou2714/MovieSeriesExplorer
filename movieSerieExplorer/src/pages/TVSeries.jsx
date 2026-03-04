import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";

import { getTvSeriesGenres } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";

const TVSeries = () => {

    const [tvSeriesGenres, setTvSeriesGenres] = useState(null);

    useEffect(() => {
        getSeriesGenres()
    },[]);

    const getSeriesGenres = () =>{
        getTvSeriesGenres("es").then((res) =>{
            setTvSeriesGenres(res.genres);
        })
    }

    return(
        <div>
            <Navbar />
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Series</h1>
            <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-4/5 m-auto">
            {
                tvSeriesGenres?.map((serie) =>(
                    <CategoryFilterBtn key={serie.id} category={serie.name}/>
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

export default TVSeries;