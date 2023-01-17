import React from 'react';
import styles from './Header.module.scss'
import {propsType} from "./HeaderContainer";
import {Menu} from "./menu/Menu";
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.header__img}>
                    <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="logo"/>
                </div>
                <div className={styles.nav}>
                    <Menu/>
                </div>
                <div className={styles.profile}>
                    {props.props.isAuth &&
                        <div className={styles.profileBox}>
                            <SvgSelector svgname={'profileLight'}/>
                            <span className={styles.login}>{props.props.login}</span>
                            <button onClick={props.props.logout} className={styles.logoutBtn}>
                                <SvgSelector svgname={'logout'}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
            { props.props.appStatus === 'loading' && <div className={styles.loaderLine}></div>}
        </header>
    )
}

type HeaderPropsType = {
    props: propsType
}

