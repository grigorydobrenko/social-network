import React from 'react';
import {
    addMessage,
    DialogPageType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {IMessageFormInput} from "./Message/AddMessageForm";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {addMessage}))(Dialogs)

export type mapStateToPropsType = {
    dialogPage: DialogPageType
}

export type mapDispatchToPropsType = {
    addMessage: (message: IMessageFormInput) => void
}

export type CommonDialogsType = mapStateToPropsType & mapDispatchToPropsType