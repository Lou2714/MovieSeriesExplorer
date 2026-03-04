import MediaCarousel from "./Carousel/MediaCarousel";

const CategorySection = ({ title, movie }) =>{
    return(
        <div>
            <div className="text-Wild-Sand-100 font-semibold py-3">
                <h1 className="px-4 pb-2">Películas para enamorarse</h1>
                <MediaCarousel />
            </div>
        </div>
    )
} 

export default CategorySection;