import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MyList from "../pages/MyList";
import SearchPage from "../pages/Search";
import TVSeries from "../pages/TVSeries";

/*https://blog.logrocket.com/react-router-v7-guide/#getting-started
https://reactrouter.com/start/declarative/routing */

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/movies" element={<Movies/>} />
                <Route path="/tvseries" element={<TVSeries/>} />
                <Route path="/search" element={<SearchPage/>} />
                <Route path="/mylist" element={<MyList/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;