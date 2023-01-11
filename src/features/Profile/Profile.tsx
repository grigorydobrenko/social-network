import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileStateType} from "./profile-reducer";


export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo setIsEdit={props.setIsEdit} isEdit={props.isEdit} saveProfile={props.saveProfile} profileEditStatus={props.profileEditStatus} savePhoto={props.savePhoto} isOwner={props.isOwner}
                         profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export type ProfilePropsType = Omit<ProfileStateType, 'posts'>
    & { updateStatus: (status: string) => void }
    & { isOwner: boolean }
    & { savePhoto: (file: File) => void }
    & { saveProfile: (profile: any) => void }
    & { setIsEdit: (isEdit: boolean) => void }
    & { profileEditStatus: string | null }
    & { isEdit: boolean }

