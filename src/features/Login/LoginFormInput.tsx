import React from 'react';
import styles from './LoginFormInput.module.scss'
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";

// @ts-ignore
export function InputLoginForm({register, name, type, label, validationSchema, svg, error, ...inputProps}) {



    const classInput = error ? styles.inputErrorField : styles.inputField



    return <div className={styles.inputIcons}>
        <i className={styles.icon}>
            <SvgSelector svgname={svg}/>
        </i>
        <input
            className={classInput}
            // id={id}
            name={name}
            type={type}
            placeholder={label}
            {...register(name, validationSchema)}
        />
        {/*{errors.password && <div>{errors.password.message}</div>}*/}
    </div>
}