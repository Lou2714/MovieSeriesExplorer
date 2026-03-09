import PosterCard from "../components/PosterCard";

import { getFavorites } from "../utils/favorites";

import { useEffect, useState } from "react";

const MyFavorites = () => {

    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        showFavorites();
    },[])

    const showFavorites = () => {
        const myFavorites = getFavorites();
        setFavorites(myFavorites);
    }

    return(
        <div>
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Mi lista</h1>
            <div className="flex flex-row flex-wrap gap-y-2 justify-center-safe py-5">
                {
                    favorites?.map((fav) => (
                        <PosterCard key={fav.id} mediaId={fav.id} mediaType={fav.mediaType} poster={fav.poster_path}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MyFavorites;