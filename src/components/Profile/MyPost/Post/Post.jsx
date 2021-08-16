import React from "react";
import s from './Post.module.css';
let count=0;
const Post = (props) => {

    debugger;
    return (
        <div className={s.item}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"/>
            {props.Message}

            <div>{count++}
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;