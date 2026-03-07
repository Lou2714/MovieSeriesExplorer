import { useEffect, useRef } from "react"

const CategoryFilterBtn = ({ category, categoryId, onclickFilterBtn, categoryIdSelected }) => {
    
    const isActive = categoryIdSelected === categoryId;
    const btnRef = useRef(null);

    const handlerClick = () =>{
        onclickFilterBtn(categoryId)
    }

    useEffect(() => {
        if (isActive && btnRef.current) {
            btnRef.current.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });
        }
        
    }, [isActive]);

    return(
        <div>
            <button className={`whitespace-nowrap px-3 py-0.5 cursor-pointer border-2 border-solid 
                rounded-xl bg-Shark-800 active:border-Biloba-Flower-400 active:text-Biloba-Flower-400 
                hover:border-Biloba-Flower-400 hover:text-Biloba-Flower-400 
                ${isActive ? "border-Biloba-Flower-400 text-Biloba-Flower-400" : "text-Wild-Sand-100" } ` }
                onClick={handlerClick}
                ref={btnRef}>
                {category}
            </button>
        </div>
    )
}

export default CategoryFilterBtn;