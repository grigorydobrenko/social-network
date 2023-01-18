import React, {ChangeEvent, useRef} from 'react';
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";
import {ProfileType} from "../../../api/api";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import Preloader from "../../../common/components/Preloader/Preloader";
import styles from "./ProfileInfo.module.scss"
import {SvgSelector} from "../../../common/components/svgSelector/SvgSelector";

const ProfileInfo: React.FC<Omit<ProfilePropsType, 'setPage'>> = (props) => {
    const {isEdit, setIsEdit, profile, status, updateStatus, isOwner, savePhoto, profileEditStatus, saveProfile} = props

    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            savePhoto(file)
        }
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.profileInfoContainer}>
            <div className={styles.mainProfileBox}>
                <img src={profile?.photos?.large ? profile.photos.large : userPhoto} alt={'photo'}
                     className={styles.profilePhoto}/>

                {isOwner && <div>
                    <button onClick={selectFileHandler} className={styles.uploadImage}><SvgSelector svgname={'photo'}/>
                    </button>
                    <input
                        style={{display: 'none'}}
                        ref={inputRef}
                        type="file"
                        onChange={uploadHandler}
                    />
                </div>}

                <h2>{profile?.fullName}</h2>
                <ProfileStatusWithHooks isOwner={isOwner} status={status} updateStatus={updateStatus}/>
            </div>
            <div className={styles.restProfileInformation}>{isEdit ?
                <ProfileDataForm saveProfile={saveProfile} profileEditStatus={profileEditStatus} profile={profile}
                                 isOwner={isOwner} setIsEdit={setIsEdit}/> :
                <ProfileData profile={profile} isOwner={isOwner} setIsEdit={setIsEdit}/>}</div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, setIsEdit}: ProfileDataProps) => {
    return <div className={styles.profileDataContainer}>
        {isOwner && <div className={styles.settingButtons}>
            <button onClick={() => setIsEdit(true)} className={styles.settingButton}> Settings</button>
        </div>}
        <div className={styles.aboutMe}><h3>About me:</h3><span>{profile.aboutMe ? profile.aboutMe : '...'}</span></div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div><b>Looking for a job
            description</b>: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '...'}</div>
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
        <div className={styles.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo

type ContactProps = {
    contactTitle: string
    contactValue: string
}

export type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    setIsEdit: (boolean: boolean) => void
}