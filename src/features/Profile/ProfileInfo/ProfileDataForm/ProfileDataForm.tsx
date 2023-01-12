import React from "react";
import {useForm} from "react-hook-form";
import {ProfileType} from "../../../../api/api";
import styles from "../ProfileInfo.module.scss"
import {FormInput} from "../../../../common/components/FormInput/FormInput";
import {FormTextarea} from "../../../../common/components/FormTextarea/FormTextarea";

export const ProfileDataForm = ({profile, isOwner, profileEditStatus, saveProfile}: ProfileDataFormProps) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {...profile}
    });

    const onSubmit = async (data: any) => {
        console.log(data)
        saveProfile(data)
    };

    return <div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.editProfileInformation}>
            {profileEditStatus && <div>{profileEditStatus}</div>}
            {isOwner && <div className={styles.settingButton}>
                <button
                    type="submit">Save
                </button>
            </div>}
            <div><FormInput id="fullName"
                            type="input"
                            name="fullName"
                            label="Full name"
                            register={register}
                            isNested={false}
            /></div>
            <div>
                <h3>About me</h3>
                <FormTextarea id="aboutMe"
                              name="fullName"
                              label="Full name"
                              rows={4}
                              register={register}/>
                {/*    <FormInput id="aboutMe"*/}
                {/*                type="input"*/}
                {/*                name="aboutMe"*/}
                {/*                label="About me"*/}
                {/*                register={register}*/}
                {/*                isNested={false}*/}
                {/*/>*/}
            </div>
            <div>
                {/*<b>Looking for a job</b><input type={"checkbox"} {...register("lookingForAJob")}*/}
                {/*                                placeholder="lookingForAJob"/>*/}
                <FormInput id="lookingForAJob"
                           type="checkbox"
                           name="lookingForAJob"
                           label="Looking for a job"
                           register={register}
                           isNested={false}
                />
            </div>

            <div>
                <h3>Looking for a job description</h3>
                <FormTextarea id="lookingForAJobDescription"
                               name="lookingForAJobDescription"
                               label="Looking for a job description"
                               rows={4}
                               register={register}
            /></div>
            <div>
                {Object.keys(profile.contacts).map(contact => {

                    return <div key={contact} className={styles.contactForm}>
                        <FormInput id={contact}
                                   type="input"
                                   name={contact}
                                   label={contact}
                                   isNested={true}
                                   register={register}
                        />
                        {/*<b>{contact}</b>:*/}
                        {/*<input {...register(`contacts.${contact as keyof typeof profile.contacts & string}`)}*/}
                        {/*                        placeholder={contact}/>*/}
                    </div>
                })}</div>


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