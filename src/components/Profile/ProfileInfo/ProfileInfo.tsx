import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";


type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>

            <div>
                <img src="https://cdn.pixabay.com/photo/2017/09/29/22/55/panorama-2800783_960_720.jpg" alt="photo"
                     className={s.content__img}/>
            </div>

            <div className={s.description}>
                <img src={props.profile.photos.large} alt={'photo'}/>
                <div>{props.profile.aboutMe}</div>
                <div>Looking for a job: {props.profile.lookingForAJob + ''}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </>
    );
};

export default ProfileInfo;