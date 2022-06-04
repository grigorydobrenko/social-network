import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.header__img}>
                    <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="logo"/>
                </div>
            </header>
        </>
    );
};

export default Header;