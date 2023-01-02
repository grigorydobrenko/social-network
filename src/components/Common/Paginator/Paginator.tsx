import React from 'react';
import s from "./Paginator.module.css";
import {UsersType} from "../../Users/Users";


export const Paginator = ({totalUsersCounter, pageSize, currentPage, onPageChanged}: Props) => {
    let pagesCount = Math.ceil(totalUsersCounter / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) => <span key={i} className={currentPage === p ? s.selectedPage : ''}
                                       onClick={() => onPageChanged(p)}>{p}</span>)}
        </div>
    )
}

type Props = Pick<UsersType, 'pageSize' | 'totalUsersCounter' | 'currentPage'> & { onPageChanged: (p: number) => void }

