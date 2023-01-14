import React, {useState} from 'react';
import {MenuItem} from "./MenuItem/MenuItem";

export const Menu = () => {
    const [active, setActive] = useState('profile')

    return (
        <>
            <MenuItem link={'/profile'} svgName={'profile'} active={active} setActive={setActive}/>
            <MenuItem link={'/dialogs'} svgName={'dialogs'} active={active} setActive={setActive}/>
            <MenuItem link={'/users'} svgName={'users'} active={active} setActive={setActive}/>
            <MenuItem link={'/news'} svgName={'news'} active={active} setActive={setActive}/>
        </>
    );
};

