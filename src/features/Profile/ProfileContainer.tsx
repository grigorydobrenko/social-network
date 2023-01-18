import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, setIsEdit, updateStatus} from "./profile-reducer";
import {AppStateType} from "../../app/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../api/api";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {AppPage, setPage} from "../../app/app-reducer";

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
                        updateStatus={this.props.updateStatus}
                        profileEditStatus={this.props.profileEditStatus}
                        saveProfile={this.props.saveProfile}
                        isEdit={this.props.isEdit}
                        setIsEdit={this.props.setIsEdit}
                        setPage={this.props.setPage}
        />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileId: state.auth.id,
    profileEditStatus: state.profilePage.profileEditStatus,
    isEdit: state.profilePage.isEdit,
    selectedPage: state.app.selectedPage
})

const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile, setIsEdit, setPage}),
    withRouter, withAuthRedirect)(ProfileAPIComponent)


type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: any) => void
    setIsEdit: (isEdit: boolean) => void
    setPage: (page: AppPage) => void
}

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    profileId: number | null
    profileEditStatus: string | null
    isEdit: boolean
    selectedPage: AppPage
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export default ProfileContainer