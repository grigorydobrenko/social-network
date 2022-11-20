import {AllActionsTypes} from "./redux-store";
import {IMessageFormInput} from "../components/Dialogs/Message/AddMessageForm";

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
    ]
}

export const dialogsReducer = (state: dialogPageType = dialogs, action: AllActionsTypes): dialogPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = {id: new Date().getTime(), message: action.message.message}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }

}

export type DialogReducerType = addMessageACType
export type addMessageACType = ReturnType<typeof addMessage>

export const addMessage = (message: IMessageFormInput) => ({type: 'ADD-MESSAGE', message} as const)


