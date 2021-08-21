import React from "react";
import s from './Diologs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem =(props)=>{

    let path = '/dialogs/' + props.id;

    return(
        <div className={s.dialog +' '+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message =(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = () => {

    let dialogs = [
        {id:1,name:'Pavel'},
        {id:2,name:'Matvey'},
        {id:3,name:'Timur'},
        {id:4,name:'Oleg'},
    ]
    let dialogsElements = dialogs.map(d =><DialogItem name={d.name} id={d.id}/>)
let messages= [
    {id:1,message:'hi'},
    {id:2,message:'how are you'},
    {id:3,message:'i"m fine'},
    {id:4,message:'urur'},
    {id:5,message:'ur'},
]
    let messageElements = messages.map(m=><Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;