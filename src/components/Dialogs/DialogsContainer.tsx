import React from 'react';
import {ACTypes, dialogPageType, profilePageType, sidebarType} from "../../redux/store";
import {addMessageAC, changeMessageTextAC} from "../../redux/dialogs-reducer";
import {CombinedState, Store} from "redux";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, ACTypes>
}


export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const {store} = props

    const dialogPage = store.getState().dialogPage

    const addMessage = () => {
        store.dispatch(addMessageAC())
    }

    const changeMessageText = (messageText: string) => {
        store.dispatch(changeMessageTextAC(messageText))
    }

    return (
        <Dialogs dialogPage={dialogPage} addMessage={addMessage} changeMessageText={changeMessageText}/>
    );
};

