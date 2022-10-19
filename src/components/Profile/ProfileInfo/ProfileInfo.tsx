import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void

}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>

            <div className={s.description}>
                <img src={props.profile.photos.large} alt={'photo'}/>
                <div>Looking for a job: {props.profile.lookingForAJob + ''}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </>
    );
};

export default ProfileInfo;