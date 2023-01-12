import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './ProfileStatus.module.scss'

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = ({status,isOwner, updateStatus}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [ProfileStatus, setStatus] = useState(status)

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const toggleMode = () => {
        if (isEdit) {
            update()
        }
        setIsEdit(!isEdit)
    }

    const update = () => {
        updateStatus(ProfileStatus)
    }

    useEffect(() => {
        setStatus(status)
    }, [status])

    return (
        <>
            {!isEdit ?
                <div onDoubleClick={toggleMode} className={!isOwner ? styles.disabled: ''}><span>{ProfileStatus || 'no status'}</span></div> :
                <input onBlur={toggleMode} onChange={onStatusChange} autoFocus
                       value={ProfileStatus} className={styles.statusInput}/>}
        </>
    )
}

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}


