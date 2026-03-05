
const PosterCard = ({ poster }) =>{
    return(
        <div className="relative w-40 h-60 rounded-lg px-1 ">
            <img src={poster} alt="poster de película o serie" 
                className="size-full rounded-lg cursor-pointer transition delay-150 duration-150 ease-in-out
                brightness-100 active:brightness-50 hover:brightness-75"/>
        </div>
    )
}

export default PosterCard;