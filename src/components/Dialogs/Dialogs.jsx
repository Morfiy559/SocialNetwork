import React from "react";
import s from './Diologs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d =><DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.state.messages.map(m=><Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onPostChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea onChange={onPostChange} ref={newMessageElement} value={props.state.newMessageText}></textarea>
                </div>
                <div>
                <button onClick={ sendMessage }>
                    Отправить
                </button>
            </div>
            </div>


        </div>
    )
}
export default Dialogs;