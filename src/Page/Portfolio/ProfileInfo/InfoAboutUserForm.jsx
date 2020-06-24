import React from "react";
import PI from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../auxiliary/componentsForForm";
import auxiliary from "../../../auxiliary/auxiliary.module.css";
import {required, requiredTextarea} from "../../../auxiliary/validationOnError/filadValidation";

const InfoUserForm = ({profile, handleSubmit, error, editMode, ...props}) => {
    return (
        <div>
            <button className={auxiliary.but} onClick={props.deactivatedEditMode}>{editMode && 'Exit edit mode'}
            </button>
            <form onSubmit={handleSubmit} className={PI.formInfo}>
                <div>
                    <Field component={Input} placeholder={'Full name:'} name={'fullName'} validate={[required]}/>
                </div>
                <div>
                    <b>Looking for a job</b>: <Field component={Input} name={'lookingForAJob'} type={'checkbox'}/>
                </div>
                <div>
                    <Field component={Textarea} placeholder={'My professional skills'}
                           name={'lookingForAJobDescription'} validate={[requiredTextarea]}/>
                </div>
                <div>
                    <Field component={Textarea} placeholder={'About me'} name={'aboutMe'}
                           validate={[requiredTextarea]}/>
                </div>
                <div className={PI.contacts}><b>Contacts</b>:
                    <div> {error && <span className={auxiliary.commonError}>
                {error}
           </span>}
                    </div>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            {key}: <Field component={Input} placeholder={key} name={'contacts.' + key} key={key}/>
                        </div>
                    })}
                </div>
                <button className={auxiliary.but}>Save info</button>
            </form>
        </div>
    )
};

const InfoAboutUserForm = reduxForm({form: 'InfoAboutUser'})(InfoUserForm);

export default InfoAboutUserForm;