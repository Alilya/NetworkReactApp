import { classNames } from "shared/lib/classNames/classNames";
import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import './styles/index.scss'
import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";



const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <button onClick={toggleTheme}>сменить тему</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;