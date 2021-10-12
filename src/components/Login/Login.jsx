import React from "react";
// import {} from "redux-form";
import {Field,reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const Input = Element('input');
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Email'}/>
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
        props.login(formData.email,formData.password,formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return(
        <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);