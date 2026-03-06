import { FaRegHeart, FaHeart } from "react-icons/fa";

const AddToMyListBtn = () =>{
    return(
        <button className="bg-Biloba-Flower-400 text-Shark-800 px-3 py-1 border-2 border-solid border-Biloba-Flower-400 
            rounded-md cursor-pointer transition-all duration-200 ease-in
            hover:bg-purple-400 active:scale-95 active:bg-purple-400 active:border-purple-400 hover:border-purple-400">
            <div className="flex flex-row gap-1 items-center">
                <FaRegHeart className="text-xl"/>
                <p>Añadir a favoritos</p>
            </div>
        </button>
    )
}

export default AddToMyListBtn;