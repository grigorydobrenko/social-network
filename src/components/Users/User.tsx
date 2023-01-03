import {UserType} from "../../redux/users-reducer";
import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

export const User: React.FC<Props> = ({user, followingInProgress, follow, unFollow,}) => {
    return (
        <div key={user.id} style={{display: 'flex'}}>
            <div>
                <div>
                    <NavLink to={'profile/' + user.id}><img alt='photo'
                                                            src={user.photos.small != null ? user.photos.small : userPhoto}
                                                            className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unFollow(user.id)
                        }}

                        >Unfollow</button>


                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}

                </div>
            </div>
            <div>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                <span>
                        <div>'user.location.country'</div>
                        <div>'user.location.city'</div>
                    </span>
            </div>
        </div>)
}

export type Props = {
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    user: UserType
}