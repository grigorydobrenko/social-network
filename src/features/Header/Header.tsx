import React from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {propsType} from "./HeaderContainer";
import {Menu} from "./menu/Menu";

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.header__img}>
                    <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="logo"/>
                </div>
                <div className={s.nav}>
                    <Menu/>
                </div>
                <div style={{background: 'red', maxHeight: '100%'}}>
                    {props.props.isAuth ?
                        <div>{props.props.login} - <button onClick={props.props.logout}>log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

type HeaderPropsType = {
    props: propsType
}

