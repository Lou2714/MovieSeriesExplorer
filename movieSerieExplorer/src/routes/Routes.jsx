import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MyFavorites from "../pages/MyFavorites";
import SearchPage from "../pages/Search";
import TVSeries from "../pages/TVSeries";
import MediaDetailsById from "../pages/MediaDetailsById";
import Layout from "../layouts/Layout";

/*https://blog.logrocket.com/react-router-v7-guide/#getting-started
https://reactrouter.com/start/declarative/routing */

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home/>} />

                    <Route path="movies" element={<Movies/>} />
                    <Route path="tvseries" element={<TVSeries/>}/>
                    <Route path="search" element={<SearchPage/>} />
                    <Route path="myfavorites" element={<MyFavorites/>} />
                    
                    <Route path=":mediaType/:id" element={<MediaDetailsById/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;