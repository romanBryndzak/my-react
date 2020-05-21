import React from "react";
import {Field, reduxForm} from "redux-form";

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} name={'remember me'} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const onSubmit = (fromData) => {
    console.log(fromData)
};
onSubmit();
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);