import PosterDetail from "../components/MediaDetails/PosterDetail";
import MediaGenres from "../components/MediaDetails/MediaGenres";
import AddToMyListBtn from "../components/MediaDetails/AddToListBtn";

import { getMovieById } from "../services/moviesServices";
import { getTvSerieById } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";
import { useParams, useLocation  } from "react-router";

const MediaDetailsById = ({}) => {

    const [moviesDetails, setMoviesDetails] = useState(null);
    const [serieDetails, setSeriesDetails] = useState(null);

    let { id } = useParams();
    let { pathname } = useLocation();

    useEffect(() => {
        getMediaDetailsById();
    },[id, pathname]);

    const getMediaDetailsById = () =>{

        if (pathname.toLowerCase().includes("movies")) {
            getMovieById(id).then((res) =>{
                setMoviesDetails(res);
            })
        }
        if (pathname.toLowerCase().includes("movies")) {
            getTvSerieById(id).then((res) =>{
                setSeriesDetails(res);
            })
        }
        
    }
    

    return(
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-Wild-Sand-100 font-bold text-lg pt-2 pb-5">Wicked: For Good</h1>
                <PosterDetail />
            </div>
            <div className="flex flex-row gap-2 justify-center py-5 flex-wrap">
                    <MediaGenres genres={"Fantasía"}/>
                    <MediaGenres genres={"Aventura"}/>
                    <MediaGenres genres={"Romance"}/>
            </div>
            <div className="text-Wild-Sand-100 flex flex-col items-start gap-2 px-5">
                <p className="font-semibold">Descripción</p>
                <p className="text-justify">Mientras la multitud alza su clamor contra la Bruja Malvada, 
                    Glinda y Elphaba deberán unirse una vez más. Con su singular amistad convertida en el 
                    punto de inflexión de su futuro, tendrán que mirarse a los ojos con honestidad y 
                    compasión para afrontar su transformación personal y cambiar el destino de todo Oz.
                </p>
                
            </div>
            <div className="px-5 py-3 flex justify-center">
                <AddToMyListBtn />
            </div>
        </div>
    )
}

export default MediaDetailsById;