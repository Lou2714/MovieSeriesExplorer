import PosterDetail from "../components/MediaDetails/PosterDetail";
import MediaGenres from "../components/MediaDetails/MediaGenres";
import AddToMyListBtn from "../components/MediaDetails/AddToListBtn";
import Spinner from "../components/Feedback/Spinner";
import ErrorMessage from "../components/Feedback/ErrorMessage";

import { getMovieById } from "../services/moviesServices";
import { getTvSerieById } from "../services/tvSeriesServices";
import { addFavoriteMedia, checkIsFavorite, removeFromFavorites } from "../utils/favorites";

import { useState, useEffect } from "react";
import { useParams, useLocation  } from "react-router";

const MediaDetailsById = ({}) => {

    const [mediaDetails, setMediaDetails] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    let { id } = useParams();
    let { pathname } = useLocation();

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        setErrorMessage("");

        getMediaDetailsById();
        isFavoriteAdded();
    },[id, pathname]);

    const getMediaDetailsById = () =>{
    //Dependiendo de si el pathname incluye movie o tv se realiza la busqueda en la api, ya que no lo sé de antemano
        if (pathname.toLowerCase().includes("movie")) {
            getMovieById(id,"es").then((res) =>{
                setMediaDetails(res);
            })
            .catch((error) => {
                setHasError(true);
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
        }
        if (pathname.toLowerCase().includes("tv")) {
            getTvSerieById(id,"es").then((res) =>{
                setMediaDetails(res);
            })
            .catch((error) => {
                setHasError(true);
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
        }
    }
    const isFavoriteAdded = () => {
        const mediaType = verifyMediaType();
        //verifica si este medio ha sido añadido a favoritos, si es así se establece cambia el estado isFavorite
        if (checkIsFavorite(id, mediaType)) {
            setIsFavorite(true)
        }else{
            setIsFavorite(false);
        }
        
    }
    const handlerAddToMyFavorites = () => {
        //Cuando le de click actualiza el estado para mostrar un corazón de agregado a favorito
        setIsFavorite(prev => !prev);
        const mediaType = verifyMediaType();
        //Si ha sido añadido a favoritos al dar click se elimina de favoritos
        if (isFavorite) {
            removeFromFavorites(id);
        }else{
            //Si no ha sido añadido a favoritos se agrega al array en localStorage
            addFavoriteMedia(id, mediaType, mediaDetails?.poster_path);
        }
    }
    const verifyMediaType = () => {
        if (pathname.toLowerCase().includes("movie")) {
            return "movies"
        }
        if (pathname.toLowerCase().includes("tv")) {
            return "tvseries"
        }
    }

    if (hasError) {
        return <ErrorMessage message={errorMessage}/>
    }

    return(
        <>
            {
                isLoading ? (<Spinner />) : 
                (
                <div className="pb-2">
                    <div className="flex flex-col items-center">
                        <h1 className="text-Wild-Sand-100 font-bold text-lg pt-2 px-5 text-center">{mediaDetails?.title || mediaDetails?.name}</h1>
                        <h2 className="text-Wild-Sand-100 font-light text-center pb-5">{mediaDetails?.original_title || mediaDetails?.original_name}</h2>
                        <PosterDetail key={mediaDetails?.id} poster={mediaDetails?.poster_path}/>
                    </div>
                    <div className="flex flex-row gap-2 justify-center m-auto py-5 flex-wrap w-5/6">
                        {
                            mediaDetails?.genres?.map((details) =>
                                (<MediaGenres key={details.id} genres={details.name}/>
                            ))
                        }
                    </div>
                    <div className="text-Wild-Sand-100 flex flex-col items-start gap-2 px-5">
                        <p className="font-semibold">Descripción</p>
                        <p className="text-justify">{mediaDetails?.overview || "No hay descripción disponible"}
                        </p>
                        
                    </div>
                    <div className="px-5 py-3 flex justify-center">
                        <AddToMyListBtn onAddFavorites={handlerAddToMyFavorites} isFavorite={isFavorite} />
                    </div>
                </div>
                )
            }
        </>
        
    )
}

export default MediaDetailsById;