import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";


class MyPosts extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
    console.log('RENDER')
        let onSubmit = (values) => {
            this.props.addPost(values.newPostBody);
        }

        // let onKeyDown = e => {
        //     if(e.keyCode == 13){
        //         e.preventDefault();
        //         props.addPost();
        //     }
        // }

        let postsElements = this.props.posts.map((p, index) => <Post Message={p.message} likesCount={p.likesCount}
                                                                     key={index}/>)
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
}

const maxLength10 = maxLengthCreator(10);
const Textarea = Element("textarea");
let AddPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostBody'} placeholder={'Enter your post'} validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form:'profileAddPostForm'})(AddPostForm);
export default MyPosts;