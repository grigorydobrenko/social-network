import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {propsType} from "./HeaderContainer";


type HeaderPropsType = {
    props: propsType
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.header__img}>
                <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="logo"/>
            </div>
            <div style={{background: 'red'}}>
                {props.props.isAuth ? <div>{props.props.login} - <button onClick={props.props.logout}>log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

