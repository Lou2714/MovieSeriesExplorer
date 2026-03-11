import { FiX } from "react-icons/fi";
import { useRef, useEffect } from "react";

import NavItemsLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onCloseMenu, menuItems, btnRef }) =>{

    const menuRef = useRef(null);
    
    //Este efecto se ejecuta cada vez que cambia el estado isOpen
    useEffect(() =>{
        //Si no está abierto no sigas, salte del efecto. Si no incluyo esto si doy click en el documento siempre
        //abre o cierra el menu
        if (!isOpen) return;
        
        document.addEventListener("click", handlerClickOutside);
        
        return () => {
            document.removeEventListener("click", handlerClickOutside);
        };
    },[isOpen])

    const handlerClickOutside = (e) =>{
        //Si la referencia del menú existe y el click no ocurre en el menú, ni en el botón para abrir el menu, entonces ejecute la función
        if (menuRef.current && !menuRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
            onCloseMenu();
        }
    }

    return(
        <div ref={menuRef} 
            className= {`bg-Shark-800 text-Wild-Sand-100 fixed inset-y-0 right-0 w-2/5 md:w-1/3 h-screen p-2 md:p-5 z-15
            transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="pt-2">
                <button className="text-lg md:text-3xl bg-Shark-800 p-1 cursor-pointer 
                    active:bg-Shark-700 hover:bg-Shark-700"
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