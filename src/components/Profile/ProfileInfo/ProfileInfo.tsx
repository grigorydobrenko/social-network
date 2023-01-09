import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            console.log(e.target.files[0])
            savePhoto(e.target.files[0])
        }
    }



    return (
        <>
            <div className={s.description}>
                <img src={profile.photos?.large || userPhoto} alt={'photo'} className={s.profilePhoto}/>
                {isOwner && <input type="file" onChange={onUploadHandler} accept={'image/*'}/>}
                <div>Looking for a job: {profile.lookingForAJob + ''}</div>
                <div>{profile.fullName}</div>
                <div>{profile.lookingForAJobDescription}</div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </>
    );
};

export default ProfileInfo;