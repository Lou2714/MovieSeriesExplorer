
const PosterDetail = ({ poster }) =>{
    return(
        <div className="relative w-44 h-64 rounded-lg">
            <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="poster de película o serie" 
                className="size-full rounded-lg"/>
        </div>
    )
}

export default PosterDetail;