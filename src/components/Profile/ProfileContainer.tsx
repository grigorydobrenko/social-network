import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void

}

type mapStateToPropsType = {
    profile: ProfileType
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileAPIComponent)


export const ProfileContainer = connect(mapStateToProps, {setProfile})(withUrlDataContainerComponent);