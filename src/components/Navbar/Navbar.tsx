import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={"/profile"}
                         className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={"/messages"}
                         className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Setting</a></div>
        </nav>
    );
};
