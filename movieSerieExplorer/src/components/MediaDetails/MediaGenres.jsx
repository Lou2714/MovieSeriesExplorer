const MediaGenres = ({ genres }) =>{
    return(
        <div className="border-2 border-solid rounded-lg whitespace-nowrap px-3 
        bg-Shark-800 border-Biloba-Flower-400 md:text-lg lg:text-xl lg:px-6 lg:py-1">
            <p className="text-Biloba-Flower-400 ">{genres}</p>
        </div>
    )
}
export default MediaGenres;