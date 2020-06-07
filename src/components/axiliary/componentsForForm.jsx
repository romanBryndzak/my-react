import React from "react";
import auxiliary from "./auxiliary.module.css";

export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div>
            <div>
                <textarea {...input} {...props} className={hasError && auxiliary.errorTextarea}/>
            </div>
            {hasError && <span className={auxiliary.errorSpan}>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div>
            <div>
                <input {...input} {...props} className={hasError && auxiliary.errorInput}/>
            </div>
            {hasError && <span className={auxiliary.errorSpan}>{meta.error}</span>}
        </div>
    )
};