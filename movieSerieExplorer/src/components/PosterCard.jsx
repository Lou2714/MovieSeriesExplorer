import wickedForGood from '../assets/wickedForGood.jpg';

const PosterCard = () =>{
    return(
        <div className="relative w-40 h-60 rounded-lg ">
            <img src={wickedForGood} alt="poster de película o serie" 
                className="size-full rounded-lg hover:outline-2 hover:outline-solid hover:outline-Biloba-Flower-400 
                active:outline-2 active:outline-solid active:outline-Biloba-Flower-400 cursor-pointer"/>
        </div>
    )
}

export default PosterCard;