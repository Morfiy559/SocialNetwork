import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts =()=>{
    return(

            <div>My posts
                <div>new post</div>
                <div className>
                    <Post Message='Hi, how are you?' />
                    <Post Message="I'm fine!"/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>


    )
}
export default MyPosts;