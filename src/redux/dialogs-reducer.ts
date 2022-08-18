import {ACTypes, dialogPageType} from "./state";


export const dialogsReducer = (state: dialogPageType, action: ACTypes) => {
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


