const CategoryFilterBtn = ({ category }) => {
    return(
        <div>
            <button className="text-Wild-Sand-100 whitespace-nowrap px-3 py-0.5 cursor-pointer border-2 border-solid rounded-lg bg-Shark-800
                active:border-Biloba-Flower-400 active:text-Biloba-Flower-400 hover:border-Biloba-Flower-400 hover:text-Biloba-Flower-400">
                {category}
            </button>
        </div>
    )
}

export default CategoryFilterBtn;