import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../api/api";

export class ProfileAPIComponent extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // @ts-ignore
            userId = this.props.profileId
            if (!userId) {
                this.props.history.push('login')
            }
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)

    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return <Profile isOwner={!this.props.match.params.userId}
                        {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        savePhoto={this.props.savePhoto}
                        updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileId: state.auth.id
})

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter, withAuthRedirect)(ProfileAPIComponent)


type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    profileId: number | null
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType