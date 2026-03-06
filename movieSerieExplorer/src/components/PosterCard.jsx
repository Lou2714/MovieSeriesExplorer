import { useNavigate } from "react-router";

const PosterCard = ({ poster, mediaId, mediaType }) =>{
    let navigate = useNavigate();

    const handlerClick = () =>{
        navigate(`/${mediaType}/${mediaId}`)
    }
    return(
        <div className="relative w-40 h-60 rounded-lg px-1 " onClick={handlerClick}>
            <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="poster de película o serie" 
                className="size-full rounded-lg cursor-pointer transition delay-150 duration-150 ease-in-out
                brightness-100 active:brightness-50 hover:brightness-75"/>
        </div>
    )
}

export default PosterCard;