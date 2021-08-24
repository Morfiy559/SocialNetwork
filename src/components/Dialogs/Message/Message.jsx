import React from "react";
import s from './../Diologs.module.css';


const Message =(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}



export default Message;