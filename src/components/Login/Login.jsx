import React from "react";
// import {} from "redux-form";
import {Field,reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";


const Input = Element('input');
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'Login'})(LoginForm);

const Login = (props) =>{

    let onSubmit = (formData) =>{
        console.log(formData)
    }

    return(
        <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default Login;