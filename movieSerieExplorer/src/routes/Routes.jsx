import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MyList from "../pages/MyList";
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

                    <Route path="movies">
                        <Route index element={<Movies/>} />
                        <Route path=":id" element={<MediaDetailsById/>} />
                    </Route>
                    <Route path="tvseries">
                        <Route index element={<TVSeries/>} />
                        <Route path=":id" element={<MediaDetailsById/>} />
                    </Route>
                    <Route path="search">
                        <Route index element={<SearchPage/>} />
                        <Route path=":id" element={<MediaDetailsById/>} />
                    </Route>
                    <Route path="mylist">
                        <Route index element={<MyList/>} />
                        <Route path=":id" element={<MediaDetailsById/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;