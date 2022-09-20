import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../Common/Preloader/Preloader";

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            // this.props.setTotalUsers(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : <div style={{
                backgroundColor: 'white',
                height: '67px'
            }}></div>}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCounter={this.props.totalUsersCounter}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
            />
        </>

    }
}








