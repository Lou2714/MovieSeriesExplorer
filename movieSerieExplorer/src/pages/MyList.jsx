import Navbar from "../components/Navbar/Navbar";
import PosterCard from "../components/PosterCard";


const MyList = () => {
    return(
        <div>
            {/* <Navbar /> */}
            <h1 className="text-center font-bold text-xl text-Wild-Sand-100">Mi lista</h1>
            <div className="flex flex-row flex-wrap gap-y-2 justify-center-safe py-5">
                <PosterCard />
                <PosterCard />
                <PosterCard />
                <PosterCard />
            </div>
        </div>
    )
}

export default MyList;