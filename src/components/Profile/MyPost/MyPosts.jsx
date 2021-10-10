import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form/es";


const MyPosts = (props) => {

let onSubmit = (values) =>{
    props.addPost(values.newPostBody);
}

    // let onKeyDown = e => {
    //     if(e.keyCode == 13){
    //         e.preventDefault();
    //         props.addPost();
    //     }
    // }

    let postsElements = props.posts.map((p,index) => <Post Message={p.message} likesCount={p.likesCount} key={index}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )
}

let AddPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostBody'} placeholder={'Enter your post'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form:'profileAddPostForm'})(AddPostForm);
export default MyPosts;