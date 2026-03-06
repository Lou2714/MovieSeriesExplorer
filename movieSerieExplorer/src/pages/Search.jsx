import SearchBar from "../components/SearchBar";
import PosterCard from "../components/PosterCard";

import { searchMulti } from "../services/searchService";

import { useState, useEffect } from "react";

const SearchPage = () =>{

    const [searchQuery, setSearchQuery] = useState("");
    const [resultsQuery, setResultsQuery] = useState(null);

    useEffect(() =>{
        getQueryResults();
    },[searchQuery]);

    const handlerSearch = (searchValue) =>{
        //console.log(searchValue);
        setSearchQuery(searchValue);
    }

    const getQueryResults = () =>{
        searchMulti(searchQuery, "es", 1).then((res) =>{
            let filteredResults = res.results.filter((result) => {
                return result.media_type != "person"
            })
            console.log(filteredResults);
            
            setResultsQuery(filteredResults);
        })
    }

    return(
        <div>
            <SearchBar onSearch={handlerSearch}/>
            <div className="flex flex-row flex-wrap gap-y-2 justify-center-safe py-10 ">
                {
                    resultsQuery?.map((result) =>(
                        <PosterCard key={result.id} mediaId={result.id} poster={result.poster_path} mediaType={result.media_type}/>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchPage;