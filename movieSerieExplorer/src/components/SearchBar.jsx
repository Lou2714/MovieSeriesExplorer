import { FiSearch } from "react-icons/fi";

import { useState } from "react";

const SearchBar = ({ onSearch }) =>{

    const [searchValue, setSearchValue] = useState("");

    const handlerSubmit = (e) =>{
        e.preventDefault();
        if (searchValue.trim()) {
            onSearch(searchValue);
            setSearchValue("");
        }
    }

    return(
        <form className="bg-Shark-700 flex flex-row gap-1 items-center w-2/3 p-2 m-auto
            rounded-md  focus-within:bg-Shark-600"
            onSubmit={handlerSubmit}>
            <FiSearch className="text-Wild-Sand-100 text-xl"/>
            <input type="text" 
                placeholder="Buscar películas o series..."
                className="w-full focus:outline-none text-Wild-Sand-100"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}/>
        </form>
    )
}
export default SearchBar;