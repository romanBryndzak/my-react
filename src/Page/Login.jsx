import React from "react";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import {Input} from "../auxiliary/componentsForForm";
import {required} from "../auxiliary/validationOnError/filadValidation";
import {connect} from "react-redux";
import {loginThunk} from "../BLL/AuthenticReducer";
import {Redirect} from "react-router-dom";
import auxiliary from "../auxiliary/auxiliary.module.css";
import {getCaptchaUrlSelector, getIsAuth} from "../BLL/Selector/Selector";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'email'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'password'}
                       type={'password'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={"checkbox"}/> Remember me
            </div>
            <div>
                {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'}/>}
                {props.captchaUrl &&
                <Field name={'captcha'} placeholder={'Enter symbol with image.'} component={Input}/>
                }
            </div>
            <div className={auxiliary.errorLogin}>
                {props.error && <span className={auxiliary.commonError}>{props.error}</span>}
            </div>
            <div>
                <button className={auxiliary.but}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div style={{margin:'1rem'}}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaUrlSelector(state)
});

export default connect(mapStateToProps, {loginThunk})(Login);