import React, {useState} from 'react';
import {MenuItem} from "./MenuItem/MenuItem";

export const Menu = () => {
    const [active, setActive] = useState('profile')


    const newsActive = window.location.pathname === '/news' ? 'news' : ''

    console.log(newsActive)

    return (
        <>
            <MenuItem link={'/profile'} svgName={'profile'} active={active} setActive={setActive}/>
            <MenuItem link={'/dialogs'} svgName={'dialogs'} active={active} setActive={setActive}/>
            <MenuItem link={'/users'} svgName={'users'} active={active} setActive={setActive}/>
            <MenuItem link={'/news'} svgName={'news'} active={newsActive || active} setActive={setActive}/>
        </>
    );
};

