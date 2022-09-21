import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/Api";

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            // this.props.setTotalUsers(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(p, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            />
        </>

    }
}








