import React from 'react';
import {addMessageAC, changeMessageTextAC, dialogPageType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    dialogPage: dialogPageType
}

export type mapDispatchToPropsType = {
    addMessage: () => void
    changeMessageText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        changeMessageText: (text) => {
            dispatch(changeMessageTextAC(text))
        }

    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

