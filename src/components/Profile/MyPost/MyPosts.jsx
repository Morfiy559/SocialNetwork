import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    let onKeyDown = e => {
        if(e.keyCode == 13){
            e.preventDefault();
            props.addPost();
        }
    }

    let postsElements = props.posts.map(p => <Post Message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} onKeyDown={onKeyDown} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )
}
export default MyPosts;