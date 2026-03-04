import { Link } from "react-router"

const NavItemsLinks = ({ icon, page, routePath }) =>{
    return(
        <nav>
            <Link
                to={routePath}
                >
                <div className="flex flex-row items-center gap-1 text-lg rounded-md p-1
                    active:bg-Shark-700 hover:bg-Shark-700 cursor-pointer hover:font-semibold active:font-semibold">
                    {icon}
                    <p>{page}</p>
                </div>
            </Link>
        </nav>
    )
}

export default NavItemsLinks;