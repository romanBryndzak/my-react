export const required = (value) => {
    if (value) return undefined;
        return ' ';
};

export const requiredTextarea = (value) => {
    if (value) return undefined;
    return 'Field is required! ';
};

export const fieldMaxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbol.`;
    return undefined;
};