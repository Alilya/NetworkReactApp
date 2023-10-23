import { Route, Routes, Link } from "react-router-dom";
import './index.scss'
import { AboutPageAsync } from "./Components/Pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./Components/Pages/MainPage/MainPageAsync";
import { Suspense } from "react";



const App = () => {
    return (
        <div className="app">
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;