import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";
import CategoryFilterBtn from "../components/Category/CategoryFilter";


const Movies = () => {
    return(
        <div>
            <Navbar />
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Películas</h1>
            <div className="flex flex-row overflow-x-auto scroll-smooth gap-3 py-3 w-4/5 m-auto">
                <CategoryFilterBtn category={"Aventura"}/>
                <CategoryFilterBtn category={"Animación"}/>
                <CategoryFilterBtn category={"Comedia"}/>
                <CategoryFilterBtn category={"Crimen"}/>
                <CategoryFilterBtn category={"Documental"}/>
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