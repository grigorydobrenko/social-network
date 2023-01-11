import React from 'react';
import {
    addMessage,
    DialogStateType
} from "./dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {compose} from "redux";
import {IMessageFormInput} from "./Message/AddMessageForm";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

const DialogsContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {addMessage}))(Dialogs)

export type mapStateToPropsType = {
    dialogPage: DialogStateType
}

export type mapDispatchToPropsType = {
    addMessage: (message: IMessageFormInput) => void
}

export type CommonDialogsType = mapStateToPropsType & mapDispatchToPropsType

export default DialogsContainer