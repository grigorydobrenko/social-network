import React from 'react';
import styles from './News.module.scss'
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";

export const News = () => {
    return (
        <div className={styles.newsContainer}>
            <SvgSelector svgname={'underDevelopment'}/>
            <div>This page is under development.</div>
        </div>
        
    );
};

