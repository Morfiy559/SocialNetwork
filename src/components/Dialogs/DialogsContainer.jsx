import React from "react";
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";



let mapStateToProps = (state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewMessageText:(text)=>{
            dispatch(updateNewMessageTextActionCreator(text))},
        sendMessage:()=>{
            dispatch(sendMessageActionCreator())

        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;