import {AllActionsTypes} from "./redux-store";
import {IMessageFormInput} from "../components/Dialogs/Message/AddMessageForm";

const dialogs: DialogPageType = {
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

export const dialogsReducer = (state: DialogPageType = dialogs, action: AllActionsTypes): DialogPageType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE': {
            const newMessage = {id: new Date().getTime(), message: action.message.message}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }

}

export const addMessage = (message: IMessageFormInput) => ({type: 'dialogs/ADD-MESSAGE', message} as const)

export type DialogReducerType = AddMessageACType
export type AddMessageACType = ReturnType<typeof addMessage>

export type DialogType = {
    name: string,
    id: number,
}

export type MessageType = {
    id?: number,
    message: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


