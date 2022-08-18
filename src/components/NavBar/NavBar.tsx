import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {sidebarType} from "../../redux/store";

type NavBarPropsType = {
    state: sidebarType
}


const NavBar: React.FC<NavBarPropsType> = (props) => {
    const {state} = props

    return (
        <div>
            <nav className={s.nav}>
                <ul>
                    <li><NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}>Messages</NavLink></li>
                    <li><NavLink to="/news" className={s.item} activeClassName={s.activeLink}>News</NavLink></li>
                    <li><NavLink to="/music" className={s.item} activeClassName={s.activeLink}>Music</NavLink></li>
                    <li><NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>Settings</NavLink></li>
                </ul>
            </nav>
            <Friends state={state.friends}/>
        </div>
    );
};

export default NavBar;