import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}><NavLink to='/dialogs/1'>Leha</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>Dima</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Max</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Kate</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>Den</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are u?</div>
            </div>
        </div>
    );
};

export default Dialogs;