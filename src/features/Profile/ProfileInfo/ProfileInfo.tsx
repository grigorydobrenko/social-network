import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.scss'
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";
import {ProfileType} from "../../../api/api";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import Preloader from "../../../common/components/Preloader/Preloader";
import styles from "./ProfileInfo.module.scss"

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
        <div className={s.profileInfoContainer}>
            <div className={s.mainProfileBox}><img src={profile.photos?.large || userPhoto} alt={'photo'}
                                                   className={s.profilePhoto}/>
                {isOwner && <input type="file" onChange={onUploadHandler} accept={'image/*'}/>}
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks isOwner={isOwner} status={status} updateStatus={updateStatus}/></div>
            <div className={s.restProfileInformation}>{isEdit ?
                <ProfileDataForm saveProfile={saveProfile} profileEditStatus={profileEditStatus} profile={profile}
                                 isOwner={isOwner} setIsEdit={setIsEdit}/> :
                <ProfileData profile={profile} isOwner={isOwner} setIsEdit={setIsEdit}/>}</div>
        </div>
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
    return <div className={styles.profileDataContainer}>
        {isOwner && <div className={styles.settingButton}>
            <button onClick={() => setIsEdit(true)}>Edit</button>
        </div>}
        <div className={styles.aboutMe}><h3>About me:</h3><span>{profile.aboutMe ? profile.aboutMe : '...'}</span></div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div><b>Looking for a job description</b>: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription: '...'}</div>
        <div>{Object.keys(profile.contacts).map((contact) => {
            const contactsValue = profile.contacts[contact]
            if (contactsValue) {
                return <Contact key={contact} contactTitle={contact} contactValue={profile.contacts[contact]}/>
            }
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