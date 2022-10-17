import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getProfile: (userId: string) => void

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
        this.props.getProfile(userId)

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})


export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getProfile}),
    withRouter)(ProfileAPIComponent)

