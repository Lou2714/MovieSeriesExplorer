import MediaCarousel from "./Carousel/MediaCarousel";

const CategorySection = ({ title, mediaResource, mediaType }) =>{
    return(
        <div>
            <div className="text-Wild-Sand-100 font-semibold py-3">
                <h1 className="px-4 pb-2">{title}</h1>
                <MediaCarousel mediaResource={mediaResource} mediaType={mediaType} />
            </div>
        </div>
    )
} 

export default CategorySection;