import {InitialStateType} from "../../redux/users-reducer";
import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = InitialStateType & {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (p: number) => void
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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "f084858c-82a6-4229-bddd-b62d132d9a71"
                                        }

                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }

                                    })

                                }}>Unfollow</button>


                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "f084858c-82a6-4229-bddd-b62d132d9a71"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }

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