import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection";

const Home = () => {
    
    return(
        <div>
            <Navbar />
            <div className="pb-5">
                <CategorySection />
                <CategorySection />
                <CategorySection />
            </div>
        </div>
    )
}

export default Home;