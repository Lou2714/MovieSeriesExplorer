import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const AddToMyListBtn = ({ onAddFavorites, isFavorite }) =>{

    return(
        <button className="bg-Biloba-Flower-400 text-Shark-800 px-3 py-1 border-2 border-solid 
            border-Biloba-Flower-400 rounded-md cursor-pointer transition-all duration-200 ease-in 
            hover:bg-purple-400 active:scale-95 active:bg-purple-400 active:border-purple-400 
            hover:border-purple-400"
            onClick={onAddFavorites}
            >
            {isFavorite ? (
                <div className="flex flex-row gap-1 items-center md:text-lg">
                    <FaHeart className="text-xl"/>
                    <p>Añadido a favoritos</p>
                </div>
                ) : 
                (
                    <div className="flex flex-row gap-1 items-center md:text-lg">
                    <FaRegHeart className="text-xl"/>
                    <p>Añadir a favoritos</p>
                    </div>
                )
            }
            
        </button>
    )
}

export default AddToMyListBtn;