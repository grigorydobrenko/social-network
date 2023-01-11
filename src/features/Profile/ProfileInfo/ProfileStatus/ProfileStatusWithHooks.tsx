import React, {ChangeEvent, useEffect, useState} from 'react';


export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = ({status, updateStatus}) => {

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
        <div>
            {!isEdit ?
                <div onDoubleClick={toggleMode}><span>{ProfileStatus || 'no status'}</span></div> :
                <input onBlur={toggleMode} onChange={onStatusChange} autoFocus
                       value={ProfileStatus}/>}
        </div>
    )
}

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


