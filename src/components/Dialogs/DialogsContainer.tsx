import React from 'react';
import {
    addMessage,
    changeMessageText,
    dialogPageType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


export type mapStateToPropsType = {
    dialogPage: dialogPageType
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    addMessage: () => void
    changeMessageText: (text: string) => void
}

export type CommonDialogsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}


export const DialogsContainer = connect(mapStateToProps, {addMessage, changeMessageText})(Dialogs)

