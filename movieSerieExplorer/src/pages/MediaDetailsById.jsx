import PosterDetail from "../components/MediaDetails/PosterDetail";
import MediaGenres from "../components/MediaDetails/MediaGenres";
import AddToMyListBtn from "../components/MediaDetails/AddToListBtn";

import { getMovieById } from "../services/moviesServices";
import { getTvSerieById } from "../services/tvSeriesServices";

import { useState, useEffect } from "react";
import { useParams, useLocation  } from "react-router";

const MediaDetailsById = ({}) => {

    const [mediaDetails, setMediaDetails] = useState(null);

    let { id } = useParams();
    let { pathname } = useLocation();

    useEffect(() => {
        getMediaDetailsById();
    },[id, pathname]);

    const getMediaDetailsById = () =>{

        if (pathname.toLowerCase().includes("movie")) {
            getMovieById(id,"es").then((res) =>{
                setMediaDetails(res);
            })
        }
        if (pathname.toLowerCase().includes("tv")) {
            getTvSerieById(id,"es").then((res) =>{
                setMediaDetails(res);
            })
        }
    }
    

    return(
        <div>
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
                <AddToMyListBtn />
            </div>
        </div>
    )
}

export default MediaDetailsById;