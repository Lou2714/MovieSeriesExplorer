import PosterCard from "../components/PosterCard";

import { getFavorites } from "../utils/favorites";

import { useEffect, useState } from "react";


const MyFavorites = () => {

    const [favorites, setFavorites] = useState(null);

    useEffect(() =>{

    },[]);

    const showFavorites = () => {
        
    }

    return(
        <div>
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Mi lista</h1>
            <div className="flex flex-row flex-wrap gap-y-2 justify-center-safe py-5">
                <PosterCard />
                <PosterCard />
                <PosterCard />
                <PosterCard />
            </div>
        </div>
    )
}

export default MyFavorites;