import React from "react";
import s from './../Diologs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem =(props)=>{

    let path = '/dialogs/' + props.id;

    return(
        <div className={s.dialogItems +' '+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;