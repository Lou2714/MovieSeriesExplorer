import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar/Navbar";
import PosterCard from "../components/PosterCard";

const SearchPage = () =>{
    return(
        <div>
            {/* <Navbar /> */}
            <SearchBar/>
            <div className="flex flex-row flex-wrap gap-y-2 justify-center-safe py-10 ">
                <PosterCard />
                <PosterCard />
                <PosterCard />
                <PosterCard />
                <PosterCard />
            </div>
        </div>
    )
}

export default SearchPage;