import PosterCard from "../components/PosterCard";

import { getFavorites } from "../utils/favorites";

import { useEffect, useState } from "react";

const MyFavorites = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        showFavorites();
    },[])

    const showFavorites = () => {
        const myFavorites = getFavorites();
        setFavorites(myFavorites);
    }

    return(
        <div className="md:px-8 lg:px-16">
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100 md:text-2xl lg:text-3xl">Mi lista</h1>
            <div className="flex flex-row flex-wrap gap-y-2 md:gap-y-3 md:gap-x-1 justify-center-safe py-5">
                {
                    favorites.length === 0 ? (
                        <p className="text-Wild-Sand-100 text-center md:text-2xl">No tienes favoritos todavía</p>
                    ) : (
                        favorites.map((fav) => (
                            <PosterCard key={fav.id} mediaId={fav.id} mediaType={fav.mediaType} poster={fav.poster_path}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default MyFavorites;