import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch, value }) =>{

    const handlerSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <form className="bg-Shark-700 flex flex-row gap-1 items-center w-2/3 p-2 m-auto
            rounded-md  focus-within:bg-Shark-600"
            onSubmit={handlerSubmit}>
            <FiSearch className="text-Wild-Sand-100 text-xl"/>
            <input type="text" 
                placeholder="Buscar películas o series..."
                className="w-full focus:outline-none text-Wild-Sand-100 md:text-xl"
                value={value}
                onChange={(e) => onSearch(e.target.value)}/>
        </form>
    )
}
export default SearchBar;