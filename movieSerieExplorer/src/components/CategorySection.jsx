import MediaCarousel from "./Carousel/MediaCarousel";

const CategorySection = ({ title, mediaResource, mediaType }) =>{
    return(
        <div>
            <div className="text-Wild-Sand-100 font-semibold py-3">
                <h1 className="pb-2 md:text-xl">{title}</h1>
                <MediaCarousel mediaResource={mediaResource} mediaType={mediaType} />
            </div>
        </div>
    )
} 

export default CategorySection;