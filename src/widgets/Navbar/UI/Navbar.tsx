import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export let Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>О сайте</AppLink>
            </div>    
        </div>
    )
}

