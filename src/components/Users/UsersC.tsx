import React from "react";
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from './../../assets/images/user.png'


export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger
            this.props.setUsers(response.data.items)
            // this.props.setTotalUsers(response.data.totalCount)
        })
    }

    onPageChanged (p: number)  {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props?.totalUsersCounter / this.props?.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div>
                <div>{pages.map((p,i)  => <span key={i} className={this.props.currentPage === p ? s.selectedPage: ''} onClick={() => this.onPageChanged(p) }>{p}</span>)}</div>
                {
                    this.props.users.map(u => <div key={u.id} style={{display: 'flex'}}>
                        <div>
                            <div>
                                <img alt='photo' src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}




