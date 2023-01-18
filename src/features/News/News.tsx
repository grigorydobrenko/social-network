import React, {useEffect} from 'react';
import styles from './News.module.scss'
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";
import {AppPage} from "../../app/app-reducer";

export const News = ({setPage}: Props) => {

    useEffect(() => {
        setPage('news')
    }, [])

    return (
        <div className={styles.newsContainer}>
            <SvgSelector svgname={'underDevelopment'}/>
            <div>This page is under development.</div>
        </div>

    )
}

type Props = {
    setPage: (page: AppPage) => void
}