import React from 'react';
import {
    addMessage,
    changeMessageText,
    dialogPageType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type mapStateToPropsType = {
    dialogPage: dialogPageType
}

export type mapDispatchToPropsType = {
    addMessage: () => void
    changeMessageText: (text: string) => void
}

export type CommonDialogsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}


export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {addMessage, changeMessageText})(Dialogs))

