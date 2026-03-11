import { Link } from "react-router"

//onCloseMenu cierra el menú cuando le de click a un botón del menu, sin importar la pagina seleccionada
const NavItemsLinks = ({ icon, page, routePath, onCloseMenu }) =>{
    return(
        <>
            <Link
                to={routePath}
                onClick={onCloseMenu}
                >
                <div className="flex flex-row items-center gap-1 text-lg md:text-2xl lg:text-xl rounded-md p-1 cursor-pointer 
                    transition-all duration-200 ease-in md:py-2 lg:px-2
                    active:bg-Shark-700 hover:bg-Shark-700">
                    {icon}
                    <p>{page}</p>
                </div>
            </Link>
        </>
    )
}

export default NavItemsLinks;