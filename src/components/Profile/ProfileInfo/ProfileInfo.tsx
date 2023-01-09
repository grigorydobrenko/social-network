import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";
import {ProfileType} from "../../../api/api";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const [isEdit, setIsEdit] = useState(false)


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
                {isEdit ? <ProfileDataForm/> : <ProfileData profile={profile} isOwner={isOwner} setIsEdit={setIsEdit}/>}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </>
    )
}

type ContactProps = {
    contactTitle: string
    contactValue: string
}

type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    setIsEdit: (boolean: boolean) => void
}

const ProfileData = ({profile, isOwner, setIsEdit}: ProfileDataProps) => {
    return <div>
        {isOwner && <button onClick={() => setIsEdit(true)}>Edit</button>}
        <div><b>Full name</b>:{profile.fullName}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
            <div><b>My professional skills</b>:{profile.lookingForAJobDescription}</div>}
        {/*<div><b>About me</b>:{profile.aboutMe}</div>*/}
        <div><b>contacts</b>: {Object.keys(profile.contacts ? profile.contacts : []).map((key, i, arr) => {
            return <Contact key={key} contactTitle={key} contactValue={arr[key]}/>
        })}</div>
    </div>
}


const Contact = ({contactTitle, contactValue}: ContactProps) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

export default ProfileInfo;