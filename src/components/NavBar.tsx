import React from 'react';
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <nav className={s.nav}>
                <ul>
                    <li><a href="" className={`${s.item} ${s.active}`}>Profile</a></li>
                    <li><a href="" className={s.item}>Messages</a></li>
                    <li><a href="" className={s.item}>News</a></li>
                    <li><a href="" className={s.item}>Music</a></li>
                    <li><a href="" className={s.item}>Settings</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;