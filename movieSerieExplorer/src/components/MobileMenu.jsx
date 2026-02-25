import { FiHome,FiSearch,FiTv,FiX, FiBookmark } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";


const MobileMenu = ({ isOpen, onCloseMenu }) =>{


    return(
        <div className= {`bg-Shark-800 text-Wild-Sand-100 fixed inset-y-0 right-0 w-2/5 h-screen p-2
            transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="pt-2">
                <button className="text-lg bg-Shark-800 p-1 cursor-pointer active:bg-Shark-700 hover:bg-Shark-700"
                    onClick={onCloseMenu}>
                    <FiX />
                </button>
            </div>
            {/* Esto tiene que ser componenete como tal, ya veremos como lo manejo */}
            <div className="flex flex-col gap-3 mt-10">
                <div className="flex flex-row items-center gap-1 text-lg rounded-md p-1
                        active:bg-Shark-700 hover:bg-Shark-700 cursor-pointer hover:font-semibold active:font-semibold">
                    <FiHome/>
                    <p>Inicio</p>
                </div>
                <div className="flex flex-row items-center gap-1 text-lg rounded-md p-1
                        active:bg-Shark-700 hover:bg-Shark-700 active:font-semibold cursor-pointer hover:font-semibold">
                    <BiMoviePlay />
                    <p>Películas</p>
                </div>
                <div className="flex flex-row items-center gap-1 text-lg rounded-md p-1
                        active:bg-Shark-700 hover:bg-Shark-700 active:font-semibold cursor-pointer hover:font-semibold">
                    <FiTv />
                    <p>Series</p>
                </div>
                <div className="flex flex-row items-center gap-1 text-lg rounded-md p-1
                        active:bg-Shark-700 hover:bg-Shark-700 active:font-semibold cursor-pointer hover:font-semibold">
                    <FiSearch />
                    <p>Buscar</p>
                </div>
                <div className="flex flex-row items-center gap-1 text-lg rounded-md p-1
                        active:bg-Shark-700 hover:bg-Shark-700 active:font-semibold cursor-pointer hover:font-semibold">
                    <FiBookmark />
                    <p>Mi lista</p>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;