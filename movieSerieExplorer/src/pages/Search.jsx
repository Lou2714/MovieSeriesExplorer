import SearchBar from "../components/SearchBar";
import PosterCard from "../components/PosterCard";

import { searchMulti } from "../services/searchService";
import { getPopularTvSeries } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";


const SearchPage = () =>{
    const [searchParams, setSearchParams] = useSearchParams();

    const [resultsQuery, setResultsQuery] = useState(null);
    const [showSeries, setShowSeries] = useState(null);

    //Obtengo el valor de la busqueda para que al regresar me muestre los resultados
    const searchQuery = searchParams.get("q");
    const [searchInputValue, setSearchInputValue] = useState(searchQuery || "");
    const [searchDebounce, setSearchDebounce] = useState(searchInputValue);

    //Cada vez que ocurra un cambio en el valor que escribe el usuario se ejecuta este efecto
    useEffect(() =>{
        const getSearchBarValue = setTimeout(() =>{
            //Cada 800 ms se estará seteando el valor del searchDebounce
            setSearchDebounce(searchInputValue);
        },500);

        return () => clearTimeout(getSearchBarValue);
    },[searchInputValue]);

    //Lo ideal es actualizar la URL después del debounce.
    //Por lo tanto, cada que se actualice el valor de searchDebounce se ejecuta este efecto
    useEffect(() =>{
        //Si searchDebounce está vacío se muestra el "home"
        if (!searchDebounce) {
            setSearchParams({});
            showPopularSeries();
            return;
        }
        setSearchParams({ q: searchDebounce }, { replace: true })
        getQueryResults();

    },[searchDebounce])

    const handlerSearch = (searchValue) =>{
        setSearchInputValue(searchValue);
    }

    const getQueryResults = () =>{
        searchMulti(searchInputValue, "es", 1).then((res) =>{
            let filteredResults = res.results.filter((result) => {
                return result.media_type != "person"
            })
            setResultsQuery(filteredResults);
        })
        
    }

    const showPopularSeries = () =>{
        getPopularTvSeries(1, "es").then((res) => {
            setShowSeries(res);
        })
    }

    return(
        <div>
            <SearchBar onSearch={handlerSearch} value={searchInputValue}/>
            {
                //Equivale a searchQuery == "", si no hay nada devuelve true
                !searchQuery ? (
                    <div className="flex flex-col gap-y-2 py-5">
                        <h1 className="text-Wild-Sand-100 text-center text-lg font-semibold">Series populares</h1>
                        <div className="flex flex-row flex-wrap gap-y-2 justify-center-safe">
                            {
                                showSeries?.map((serie) =>(
                                    <PosterCard key={serie.id} mediaId={serie.id} poster={serie.poster_path} mediaType={"tvseries"}/>
                                ))
                            }
                        </div>
                    </div>
                    
                ) : (
                    <div className="flex flex-col gap-y-2 py-5">
                        <h1 className="text-Wild-Sand-100 text-center text-lg font-semibold">{`Resultado de ${searchQuery}`}</h1>
                        <div className="flex flex-row flex-wrap gap-y-2 justify-center-safe">
                            {
                                resultsQuery?.map((result) =>(
                                    <PosterCard key={result.id} mediaId={result.id} poster={result.poster_path} mediaType={result.media_type}/>
                                ))
                            }
                        </div>
                    </div>
                    
                )
            }
        </div>
    )
}

export default SearchPage;