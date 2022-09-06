import React from "react";
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from './../../assets/images/user.png'



export const Users = (props: UsersPropsType) => {
    const addUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }
    return (
        <div>
            <button onClick={addUsers}>add users</button>
            {
                props.usersPage.users.map(u => <div key={u.id} style={{display: 'flex'}}>
                    <div>
                        <div>
                            <img alt='photo' src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
