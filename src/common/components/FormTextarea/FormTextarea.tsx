import React from 'react';
import styles from './FormTextarea.module.scss'

// @ts-ignore
export function FormTextarea({register, name, label, id, rows, ...inputProps}) {

    return <>
        <textarea
            className={styles.styleTextarea}
            id={id}
            name={name}
            placeholder={label}
            rows={rows}
            {...register(name)}
        />
        {/*{errors.password && <div>{errors.password.message}</div>}*/}
    </>
}

