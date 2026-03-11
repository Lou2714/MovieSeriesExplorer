import { useNavigate } from "react-router";
import PosterNotAvailable from "../assets/imagenPlaceholder.jpg"
//import { saveScrollPosition } from "../utils/sessionStorage";

const PosterCard = ({ poster, mediaId, mediaType }) =>{
    let navigate = useNavigate();
    
    const handlerClick = () =>{
        navigate(`/${mediaType}/${mediaId}`)
        //saveScrollPosition(window.scrollY);
    }
    return(
        <div className="relative w-40 md:w-44 h-60 md:h-64 rounded-lg px-1 " onClick={handlerClick}>
            <img src={poster ? `https://image.tmdb.org/t/p/original${poster}` : PosterNotAvailable} 
                alt="poster de película o serie" 
                className="size-full rounded-lg cursor-pointer transition delay-150 duration-150 ease-in-out
                brightness-100 active:brightness-50 hover:brightness-75"/>
        </div>
    )
}

export default PosterCard;