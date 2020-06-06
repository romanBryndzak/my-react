import React from "react";

export const required = (value) => {
    if (value) return undefined;
        return 'The field is required!';
};

export const fieldMaxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbol.`;
    return undefined;
};