import React from "react";
// import {} from "redux-form";
import {Field,reduxForm} from "redux-form";


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} type="text" placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} type="text" placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> remember me
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