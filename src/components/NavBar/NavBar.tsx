import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "./Friends/Friends";


type NavBarPropsType = {}


const NavBar: React.FC<NavBarPropsType> = (props) => {

    return (
        <div>
            <nav className={s.nav}>
                <ul>
                    <li><NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}>Messages</NavLink></li>
                    <li><NavLink to="/news" className={s.item} activeClassName={s.activeLink}>News</NavLink></li>
                    <li><NavLink to="/music" className={s.item} activeClassName={s.activeLink}>Music</NavLink></li>
                    <li><NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <FriendsContainer/>
        </div>
    );
};

export default NavBar;