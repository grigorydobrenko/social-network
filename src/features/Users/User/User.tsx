import {UserType} from "../users-reducer";
import React from "react";
import s from "../Users.module.scss";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import styles from "./User.module.scss"
import {Connect, Follow, UnFollow, ViewProfile} from "../../../common/components/Buttons/Buttons";

export const User: React.FC<UserProps> = ({user, followingInProgress, follow, unFollow}) => {

    return (
        <div key={user.id} className={styles.userContainer}>
            <div className={styles.userMainBox}>
                <div>
                    <NavLink to={'profile/' + user.id}>
                        <img alt='photo'
                             src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div className={styles.userName}>
                    <h5>{user.name}</h5>
                    <div>{user.status}</div>
                </div>
            </div>
            <div className={styles.userButtons}>
                <Connect/>
                {user.followed ?
                    <UnFollow followingInProgress={followingInProgress} user={user} unFollow={unFollow}/>
                    :
                    <Follow followingInProgress={followingInProgress} user={user} follow={follow}/>
                }
            </div>
            <div className={styles.viewProfile}>
                <ViewProfile userId={user.id}/>
            </div>
        </div>)
}

export type UserProps = {
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    user: UserType
}