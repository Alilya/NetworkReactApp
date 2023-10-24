import { Route, Routes, Link } from "react-router-dom";
import './Components/styles/index.scss'
import { AboutPageAsync } from "./Components/Pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./Components/Pages/MainPage/MainPageAsync";
import { Suspense, useContext, useState } from "react";
import ThemeContext, { Theme } from "./Components/theme/ThemeContext";
import { useTheme } from "./Components/theme/useTheme";
import { classNames } from "./Components/helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app',{},[theme])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <button onClick={toggleTheme}>сменить тему</button>
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