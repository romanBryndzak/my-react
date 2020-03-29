import React from "react";
import i from "./Interlocutor.module.css";
import {NavLink} from "react-router-dom";

const Interlocutor = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={i.wrapper}>
            <div>
                <img className={i.ava}
                     src={'https://i.pinimg.com/originals/c8/e2/1e/c8e21ec944696e38da97ebeb05825973.jpg'}
                     alt={'avatar user'}/>
                <NavLink to={path} activeClassName={i.active}>{props.name}</NavLink>
            </div>
        </div>
    )
};

export default Interlocutor;