import {AllActionsTypes} from "./redux-store";

export type DialogType = {
    name: string,
    id: number,
}

export type MessageType = {
    id?: number,
    message: string
}


export type dialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

const dialogs: dialogPageType = {
    dialogs: [
        {
            name: 'Leha',
            id: 1,
        },
        {
            name: 'Dima',
            id: 2,
        }, {
            name: 'Max',
            id: 3,
        }, {
            name: 'Kate',
            id: 4,
        }, {
            name: 'Den',
            id: 5,
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'Its me'
        }, {
            id: 3,
            message: 'Hello'
        },
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: dialogPageType = dialogs, action: AllActionsTypes): dialogPageType => {
    switch (action.type) {
        case 'CHANGE-MESSAGE': {
            return {...state, newMessageText: action.messageText}
        }
        case 'ADD-MESSAGE': {
            const newMessage = {id: new Date().getTime(), message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        default:
            return state
    }

}

export type DialogReducerType = changeMessageTextACType | addMessageACType

export type changeMessageTextACType = ReturnType<typeof changeMessageTextAC>
export type addMessageACType = ReturnType<typeof addMessageAC>

export const changeMessageTextAC = (messageText: string) => {
    return {
        type: 'CHANGE-MESSAGE',
        messageText
    } as const
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}


