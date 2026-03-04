import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";

const Home = () => {
    
    return(
        <div>
            <Navbar />
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Inicio</h1>
            <div className="pb-5">
                <CategorySection />
                <CategorySection />
                <CategorySection />
            </div>
        </div>
    )
}

export default Home;