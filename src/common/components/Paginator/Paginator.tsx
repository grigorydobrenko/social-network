import React, {useState} from 'react';
import styles from "./Paginator.module.scss";
import {UsersType} from "../../../features/Users/Users";
import {SvgSelector} from "../svgSelector/SvgSelector";


export const Paginator = ({totalUsersCounter, pageSize, currentPage, onPageChanged}: Props) => {
    let pagesCount = Math.ceil(totalUsersCounter / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            <button disabled={portionNumber === 1} onClick={() => {
                setPortionNumber(1)
            }} className={styles.arrowDoubleLeft}>
                <SvgSelector svgname={'arrowDoubleLeft'}/>
            </button>

            <button disabled={portionNumber <= 1} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} className={styles.arrowLeft}>
                <SvgSelector svgname={'arrowLeft'}/>
            </button>

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => <span key={i}
                                     className={currentPage === p ? `${styles.selectedPage} ${styles.page}` : styles.page}
                                     onClick={() => onPageChanged(p)}>{p}</span>)}


            <button disabled={!(portionCount > portionNumber)} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} className={styles.arrowRight}>
                <SvgSelector svgname={'arrowRight'}/>
            </button>

            <button disabled={portionNumber === portionCount} onClick={() => {
                setPortionNumber(portionCount)
            }} className={styles.arrowDoubleRight}>
                <SvgSelector svgname={'arrowDoubleRight'}/>
            </button>

        </div>
    )
}

type Props = Pick<UsersType, 'pageSize' | 'totalUsersCounter' | 'currentPage'> & { onPageChanged: (p: number) => void }

