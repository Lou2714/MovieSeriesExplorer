import { FiMenu, FiHome,FiSearch,FiTv } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

import MobileMenu from "./MobileMenu";
import NavItemsLinks from "./NavLinks";

import { useState, useRef } from "react";

const Navbar = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const btnMenuRef = useRef(null);

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
            page: "Favoritos",
            icon: <FaRegHeart/>,
            path: "/myfavorites"
        },
    ]

    const handlerMenu = () =>{
        setIsOpen(prev => !prev);
    }

    return(
        <nav className="bg-Shark-800 relative flex flex-row justify-end px-4 md:px-8 pt-4 pb-2
            lg:pb-6">
            <button ref={btnMenuRef} className="bg-Shark-800 p-1 cursor-pointer active:bg-Shark-700 hover:bg-Shark-700 lg:hidden"
                onClick={handlerMenu}>
                <FiMenu className="text-Wild-Sand-100 text-xl md:text-3xl"/>
            </button>
            <div className="hidden lg:flex flex-row gap-6 items-center text-Wild-Sand-100 ">
                {menuItems.map((item, index) => 
                    (
                        <NavItemsLinks 
                            key={index}
                            icon={item.icon}
                            page={item.page}
                            routePath={item.path}
                        />
                    ))
                }
            </div>
            <div className="lg:hidden">
                <MobileMenu isOpen={isOpen} onCloseMenu={handlerMenu} menuItems={menuItems} btnRef={btnMenuRef}/>
            </div>
        </nav>
    )

}
export default Navbar;