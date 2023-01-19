import React, {useEffect} from 'react';
import styles from './News.module.scss'
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";
import {AppPage, setPage} from "../../app/app-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {AppStateType} from "../../app/redux-store";

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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const NewsContainer = connect((mapStateToProps), {setPage})(withAuthRedirect(News))

type Props = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    setPage: (setPage: AppPage) => void
}

