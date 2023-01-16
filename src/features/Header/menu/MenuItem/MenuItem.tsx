import React from 'react';
import styles from "../../Header.module.scss";
import {NavLink} from "react-router-dom";
import {SvgName, SvgSelector} from "../../../../common/components/svgSelector/SvgSelector";


export const MenuItem = ({link, svgName, active,setActive}: MenuItemProps) => {
    const className = active === svgName ? styles.activeItem : styles.notActive

    const onClickHandler = () => {
        setActive(svgName)
    }

    return (
        // <div className={className} onClick={onClickHandler}>
            <NavLink to={link} className={`${styles.item} ${className}`} onClick={onClickHandler} activeClassName={styles.activeLink}>
                <SvgSelector svgname={svgName}/>
                <span>{svgName[0].toUpperCase() + svgName.slice(1)}</span>
            </NavLink>
        // </div>
    );
};


type MenuItemProps = {
    link: string
    svgName: SvgName
    active: string
    setActive: (active: string) => void
}
