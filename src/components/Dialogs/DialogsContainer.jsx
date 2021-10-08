import React from "react";
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



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

// export default DialogsContainer;
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);