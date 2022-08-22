import React from 'react';
import {addMessageAC, changeMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsPropsType = {}


export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    return <StoreContext.Consumer>
        {store => {
            const dialogPage = store.getState().dialogPage

            const addMessage = () => {
                store.dispatch(addMessageAC())
            }

            const changeMessageText = (messageText: string) => {
                store.dispatch(changeMessageTextAC(messageText))
            }
            return (
                <Dialogs
                    dialogPage={dialogPage}
                    addMessage={addMessage}
                    changeMessageText={changeMessageText}/>
            )
        }
        }
    </StoreContext.Consumer>
};

