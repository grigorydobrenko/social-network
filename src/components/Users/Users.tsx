import {InitialStateType} from "../../redux/users-reducer";
import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {ResultCodesEnum, usersAPI} from "../../api/Api";

type UsersType = InitialStateType & {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (p: number) => void
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => void
}

export const Users: React.FC<UsersType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCounter / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div>{pages.map((p, i) => <span key={i} className={props.currentPage === p ? s.selectedPage : ''}
                                            onClick={() => props.onPageChanged(p)}>{p}</span>)}</div>
            {
                props.users.map(u => <div key={u.id} style={{display: 'flex'}}>
                    <div>
                        <div>
                            <NavLink to={'profile/' + u.id}><img alt='photo'
                                                                 src={u.photos.small != null ? u.photos.small : userPhoto}
                                                                 className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingInProgress(u.id, true)
                                    usersAPI.unFollow(u.id).then(data => {
                                        if (data.resultCode === ResultCodesEnum.Succes) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(u.id, false)
                                    })

                                }}>Unfollow</button>


                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingInProgress(u.id, true)
                                    usersAPI.follow(u.id).then(data => {
                                        if (data.resultCode === ResultCodesEnum.Succes) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(u.id, false)
                                    })

                                }}>Follow</button>}

                        </div>
                    </div>
                    <div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>'u.location.country'</div>
                        <div>'u.location.city'</div>
                    </span>
                    </div>
                </div>)
            }

        </div>

    );
}