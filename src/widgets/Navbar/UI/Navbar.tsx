import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { allowedNodeEnvironmentFlags } from 'process';

interface NavbarProps {
    className?: string;
}

export let Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
        </div>
    )
}

