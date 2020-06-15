import React from "react";

export const updateObjectInArray = (item, objectName, itemId, newObjectProps) => {
    return item.map(u =>{
        if (u[itemId] === objectName)
            return {...u, ...newObjectProps};
        return u
    })
};