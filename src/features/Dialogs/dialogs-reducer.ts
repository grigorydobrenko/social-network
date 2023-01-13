import {IMessageFormInput} from "./Message/AddMessageForm";
import {v1} from "uuid";

const dialogs: DialogStateType = {
    dialogs: [
        {
            name: 'Lesha',
            id: v1(),
        },
        {
            name: 'Dima',
            id: v1(),
        },
        {
            name: 'Max',
            id: v1(),
        },
        {
            name: 'Kate',
            id: v1(),
        },
        {
            name: 'Den',
            id: v1(),
        },  {
            name: 'Den',
            id: v1(),
        },  {
            name: 'Den',
            id: v1(),
        },  {
            name: 'Den',
            id: v1(),
        },  {
            name: 'Den',
            id: v1(),
        },  {
            name: 'Den',
            id: v1(),
        },  {
            name: 'Den',
            id: v1(),
        },
    ],
    messages: [
        {
            id: v1(),
            message: 'Hi'
        },
        {
            id: v1(),
            message: 'Its me'
        },
        {
            id: v1(),
            message: 'Hello'
        },
    ]
}

export const dialogsReducer = (state: DialogStateType = dialogs, action: DialogActionsType): DialogStateType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE': {
            const newMessage = {id: v1(), message: action.message.message}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }

}

//actions
export const addMessage = (message: IMessageFormInput) => ({type: 'dialogs/ADD-MESSAGE', message} as const)

//types
export type DialogActionsType = AddMessageACType
export type AddMessageACType = ReturnType<typeof addMessage>

export type DialogType = {
    name: string,
    id: string,
}

export type MessageType = {
    id?: string,
    message: string
}

export type DialogStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


