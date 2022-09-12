import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type ProfilePropsType = {
    setProfile: (profile: ProfileType) => void
    profile: ProfileType
}


export class ProfileAPIComponent extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})


export const ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileAPIComponent);