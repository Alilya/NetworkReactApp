import { classNames } from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import './styles/index.scss'
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>сменить тему</button>
            <AppRouter />
        </div>
    )
}

export default App;

