import {ACTypes, dialogPageType} from "./store";


const dialogs:dialogPageType = {
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

export const dialogsReducer = (state: dialogPageType = dialogs, action: ACTypes) => {
    switch (action.type) {
        case 'CHANGE-MESSAGE': {
            state.newMessageText = action.messageText
            return state
        }
        case 'ADD-MESSAGE': {
            let newMessage = {id: 4, message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
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

