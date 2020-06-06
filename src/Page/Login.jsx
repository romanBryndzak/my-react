import React from "react";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import {Input} from "../components/axiliary/componentsForForm";
import {required} from "../components/axiliary/validationOnError/filadValidation";

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
                <Field component={Input} name={'login'} placeholder={'Login'} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'Password'}
                       type={'password'} validate={[required]}/>
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

const onSubmit = () => {
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);