import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfilePropsType} from "../Profile";

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <>
            <div className={s.description}>
                <img src={profile.photos.large} alt={'photo'}/>
                <div>Looking for a job: {profile.lookingForAJob + ''}</div>
                <div>{profile.fullName}</div>
                <div>{profile.lookingForAJobDescription}</div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </>
    );
};

export default ProfileInfo;