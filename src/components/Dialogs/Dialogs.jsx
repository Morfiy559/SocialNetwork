import React from "react";
import s from './Diologs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {reduxForm,Field} from "redux-form/es";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map((d,index) => <DialogItem name={d.name} id={d.id} key={index}/>)

    let messageElements = props.dialogsPage.messages.map((m,index) => <Message message={m.message} key={index}/>)



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if(!props.isAuth)return <Redirect to='/login'/>
    return (

        <div className={s.dialogs}>
            <div  className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>


        </div>
    )
}
const Textarea = Element('textarea');
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} validate={[required,maxLength50]}/>
            <div>
                <button>
                    Отправить
                </button>
            </div>
        </form>
    )
}

let AddMessageReduxForm = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;