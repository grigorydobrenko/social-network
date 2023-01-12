import React from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {propsType} from "./HeaderContainer";


type HeaderPropsType = {
    props: propsType
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.header__img}>
                    <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="logo"/>
                </div>
                <div className={s.nav}>
                    <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>Profile</NavLink>
                    <NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}>Messages</NavLink>
                    <NavLink to="/users" className={s.item} activeClassName={s.activeLink}>Users</NavLink>
                    <NavLink to="/news" className={s.item} activeClassName={s.activeLink}>News</NavLink>
                    <NavLink to="/music" className={s.item} activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div style={{background: 'red'}}>
                    {props.props.isAuth ?
                        <div>{props.props.login} - <button onClick={props.props.logout}>log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
};

