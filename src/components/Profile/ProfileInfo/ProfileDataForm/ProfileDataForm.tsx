import React from "react";
import {useForm} from "react-hook-form";
import {ProfileType} from "../../../../api/api";

export const ProfileDataForm = ({profile, isOwner,  profileEditStatus, saveProfile}: ProfileDataFormProps) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {...profile}
    });

    const onSubmit = async (data: any) => {
        console.log(data)
        saveProfile(data)

    };

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            {profileEditStatus && <div>{profileEditStatus}</div>}
            {isOwner && <button
                // onClick={() => setIsEdit(true)}
                type="submit">Save</button>}

            <div><b>Full name</b>:<input {...register("fullName")} placeholder="fullName"/></div>
            <div><b>Looking for a job</b>:<input type={"checkbox"} {...register("fullName")} placeholder="lookingForAJob"/></div>
            <div><b>About me</b>:<input {...register("aboutMe")} placeholder="aboutMe"/></div>
            <div><b>lookingForAJobDescription</b>:<input {...register("lookingForAJobDescription")} placeholder="lookingForAJobDescription"/></div>
            <div><b>github</b>:<input {...register("contacts.github")} placeholder="github"/></div>
            <div><b>Contacts: </b>
                {Object.keys(profile.contacts).map(contact => {
                    return <div key={contact}>
                        <b>{contact}</b>:<input {...register(`contacts.${contact as keyof typeof profile.contacts & string}`)}
                                                placeholder={contact}/></div>
                })}</div>

            {profile.lookingForAJob &&
                <div><b>My professional skills</b>:{profile.lookingForAJobDescription}</div>}
        </form>
    </div>
}

type ProfileDataFormProps = {
    profile: ProfileType
    isOwner: boolean
    setIsEdit: (boolean: boolean) => void
    profileEditStatus: string | null
    saveProfile: (profile: any) => void
}