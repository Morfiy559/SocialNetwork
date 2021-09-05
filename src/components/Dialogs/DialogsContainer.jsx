import React from "react";
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {   store=> {
            let sendMessage = () => {
                store.dispatch(sendMessageActionCreator());
            }

            let onPostChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }
            return <Dialogs updateNewMessageText={onPostChange} sendMessage={sendMessage}
                            dialogsPage={store.getState().dialogsPage}/>
            }
        }
    </StoreContext.Consumer>

}
export default DialogsContainer;