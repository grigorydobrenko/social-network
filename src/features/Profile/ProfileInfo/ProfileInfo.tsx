import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";
import {ProfileType} from "../../../api/api";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import Preloader from "../../../common/components/Preloader/Preloader";

const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
    const {isEdit, setIsEdit, profile, status, updateStatus, isOwner, savePhoto, profileEditStatus, saveProfile} = props

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
                {isEdit ?
                    <ProfileDataForm saveProfile={saveProfile} profileEditStatus={profileEditStatus} profile={profile}
                                     isOwner={isOwner} setIsEdit={setIsEdit}/> :
                    <ProfileData profile={profile} isOwner={isOwner} setIsEdit={setIsEdit}/>}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </>
    )
}

type ContactProps = {
    contactTitle: string
    contactValue: string
}

export type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    setIsEdit: (boolean: boolean) => void
}

const ProfileData = ({profile, isOwner, setIsEdit}: ProfileDataProps) => {
    return <div>
        {isOwner && <button onClick={() => setIsEdit(true)}>Edit</button>}
        <div><b>Full name</b>:{profile.fullName}</div>
        <div><b>About me</b>:{profile.aboutMe}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div><b>Looking for a job description</b>: {profile.lookingForAJobDescription}</div>
        <div><b>contacts</b>: {Object.keys(profile.contacts).map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}


export const Contact = ({contactTitle, contactValue}: ContactProps) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

export default ProfileInfo;