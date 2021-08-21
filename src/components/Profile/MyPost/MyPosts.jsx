import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts= [
        {id:1,message:'Hi, how are you?', likesCount:12},
        {id:2,message:"I'm fine!",likesCount: 15},
        {id:2,message:"I'm f!",likesCount: 15},
        {id:2,message:"I'm !",likesCount: 23},
        {id:2,message:"I'm ne!",likesCount: 55},
    ]
    let postsElements = posts.map(p=><Post Message={p.message} likesCount={p.likesCount} />)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )
}
export default MyPosts;