import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

import { useState } from "react";

const Navbar = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const handlerMenu = () =>{
        setIsOpen(prev => !prev);
    }

    return(
        <nav className="bg-Shark-800 relative flex flex-row justify-end px-4 pt-4 pb-2">
            <button className="bg-Shark-800 p-1 cursor-pointer active:bg-Shark-700 hover:bg-Shark-700"
                onClick={handlerMenu}>
                <FiMenu className="text-Wild-Sand-100 text-xl"/>
            </button>
            <MobileMenu isOpen={isOpen} onCloseMenu={handlerMenu} />
            {/* {isOpen && <MobileMenu isOpen={isOpen} onCloseMenu={handlerMenu} />} */}
        </nav>
    )

}
export default Navbar;