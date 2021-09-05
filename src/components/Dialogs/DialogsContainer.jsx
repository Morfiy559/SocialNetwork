import React from "react";
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;



    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }
    return <Dialogs updateNewMessageText={onPostChange} sendMessage={sendMessage} dialogsPage={state}/>

}
export default DialogsContainer;