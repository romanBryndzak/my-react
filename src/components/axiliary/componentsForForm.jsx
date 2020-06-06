import React from "react";
import a from "./auxiliary.module.css";

export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={a.wrapperComponent}>
            <div>
                <textarea {...input} {...props} className={hasError && a.errorTextarea}/>
            </div>
            {hasError && <span className={a.errorSpan}>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.error;
    if (meta.touched === true && input.value === "") {
        hasError = false
    } else if(meta.error === undefined) {
        hasError = true

    }

    return (
        <div className={a.wrapperComponent}>
            <div>
                <input {...input} {...props} className={!hasError && a.errorInput}/>
            </div>
            {!hasError && <span className={a.errorSpan}>{meta.error}</span>}
        </div>
    )
};