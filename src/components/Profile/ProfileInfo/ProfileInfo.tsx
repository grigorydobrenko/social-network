import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void

}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {

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