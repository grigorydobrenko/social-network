import {UserType} from "../users-reducer";
import React from "react";
import s from "../Users.module.scss";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import styles from "./User.module.scss"

export const User: React.FC<Props> = ({user, followingInProgress, follow, unFollow,}) => {
    return (
        <div key={user.id} className={styles.userContainer}>
            <div className={styles.userMainBox} >
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
                {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unFollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
                <button>Message</button>


            </div>
            <div className={styles.viewProfile}>
                <NavLink to={'profile/' + user.id}><button>View profile</button></NavLink>
            </div>
        </div>)
}

export type Props = {
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    user: UserType
}