import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/Api";


type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void

}

type mapStateToPropsType = {
    profile: ProfileType | null
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        usersAPI.getUserProfile(userId).then(data => {
            this.props.setProfile(data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileAPIComponent)


export const ProfileContainer = connect(mapStateToProps, {setProfile})(withUrlDataContainerComponent);