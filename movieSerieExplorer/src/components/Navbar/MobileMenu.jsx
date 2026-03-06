import { FiHome,FiSearch,FiTv,FiX, FiBookmark } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";

import NavItemsLinks from "./NavLinks";


const MobileMenu = ({ isOpen, onCloseMenu }) =>{

    const menuItems = [
        {
            page: "Inicio",
            icon: <FiHome/>,
            path:"/"
        },
        {
            page: "Películas",
            icon: <BiMoviePlay/>,
            path: "/movies"
        },
        {
            page: "Series",
            icon: <FiTv/>,
            path: "/tvseries"
        },
        {
            page: "Buscar",
            icon: <FiSearch/>,
            path: "/search"
        },
        {
            page: "Mi lista",
            icon: <FiBookmark/>,
            path: "/mylist"
        },
    ]

    return(
        <div className= {`bg-Shark-800 text-Wild-Sand-100 fixed inset-y-0 right-0 w-2/5 h-screen p-2 z-15
            transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="pt-2">
                <button className="text-lg bg-Shark-800 p-1 cursor-pointer active:bg-Shark-700 hover:bg-Shark-700"
                    onClick={onCloseMenu}>
                    <FiX />
                </button>
            </div>
            <div className="flex flex-col gap-3 mt-10">
                {menuItems.map((item, index) => 
                    (
                        <NavItemsLinks 
                            key={index}
                            icon={item.icon}
                            page={item.page}
                            routePath={item.path}
                            onCloseMenu={onCloseMenu}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MobileMenu;