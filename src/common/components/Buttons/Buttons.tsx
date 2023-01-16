import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Buttons.module.scss"
import {SvgSelector} from "../svgSelector/SvgSelector";
import {UserProps} from "../../../features/Users/User/User";

export const Connect = () => {
    return (
        <NavLink to={'/dialogs'} className={styles.connect}>
            Connect
        </NavLink>
    );
};

export const Follow = ({followingInProgress, user, follow}: FollowProps) => {
    return (
        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            follow(user.id)
        }}  className={styles.follow}><SvgSelector svgname={'follow'}/>Follow</button>
    )
}

export const UnFollow = ({followingInProgress, user, unFollow}: UnFollowProps) => {
    return (
        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            unFollow(user.id)
        }}  className={styles.follow}><SvgSelector svgname={'unFollow'}/>Unfollow</button>
    )
}

export const ViewProfile = ({userId}: ViewProfileProps) => {
    return (
        <NavLink to={'profile/' + userId}>
            <button className={styles.viewProfile}>View profile</button>
        </NavLink>
    )
}

export const SendMessage = () => {
    return (
        <button className={styles.sendMessage}>Send</button>
    )
}

type FollowProps = Omit<UserProps, 'unFollow'>
type UnFollowProps = Omit<UserProps, 'follow'>
type ViewProfileProps = {userId: number}