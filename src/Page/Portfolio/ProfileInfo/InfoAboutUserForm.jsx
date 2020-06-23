import React from "react";
import PI from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../auxiliary/componentsForForm";
import auxiliary from "../../../auxiliary/auxiliary.module.css";

const InfoUserForm = ({profile, handleSubmit}) => {
    const Contact = ({contactTitle}) => {
        return <div>
            <Field component={Input} placeholder={contactTitle} name={contactTitle}/>
        </div>
    };

    return (
            <form onSubmit={handleSubmit} className={PI.formInfo}>
                <button className={auxiliary.but}>Save info</button>
                <div>
                   <Field component={Input} placeholder={'Full name:'} name={'fullName'}/>
                </div>
                <div>
                    <b>Looking for a job</b>: <Field component={Input} name={'lookingForAJob'} type={'checkbox'}/>
                </div>
                <div>
                    <Field component={Textarea} placeholder={'My professional skills'} name={'lookingForAJobDescription'} />
                </div>
                <div>
                    <Field component={Textarea} placeholder={'About me'} name={'aboutMe'}/>
                </div>
                <div className={PI.contacts}><b>Contacts</b>:
                    <div> {Object.keys(profile.contacts).map(key => {
                        return <Contact contactTitle={key} key={key}/>
                    })}
                    </div>
                </div>
            </form>
    )
};

const InfoAboutUserForm = reduxForm({form: 'InfoAboutUser'}) (InfoUserForm);

export default InfoAboutUserForm;