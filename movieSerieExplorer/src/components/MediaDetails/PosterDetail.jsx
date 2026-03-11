import PosterNotAvailable from "../../assets/imagenPlaceholder.jpg";

const PosterDetail = ({ poster }) =>{
    return(
        <div className="relative w-44 h-64 rounded-lg lg:w-52 lg:h-78">
            <img src={poster ? `https://image.tmdb.org/t/p/original${poster}` : PosterNotAvailable} alt="poster de película o serie" 
                className="size-full rounded-lg"/>
        </div>
    )
}

export default PosterDetail;