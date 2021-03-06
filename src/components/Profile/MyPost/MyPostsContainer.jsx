import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps =(state)=>{
    return{
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(newPostBody)=>{
            dispatch(addPostActionCreator(newPostBody));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;