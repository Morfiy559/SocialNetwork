import React from "react";
import s from './Diologs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d =><DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.dialogsPage.messages.map(m=><Message message={m.message}/>)

    let newMessageText = props.dialogsPage.newMessageText;

    let sendMessage = () => {
        props.sendMessage();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    let onKeyDown = e => {
        if(e.keyCode == 13){
            e.preventDefault();
            props.sendMessage();
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea onChange={onPostChange} onKeyDown={onKeyDown} value={newMessageText}/>
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