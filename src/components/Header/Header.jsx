import React from "react";
import H from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={H.header}>
            <img className={H.avatar} src='https://namobilu.com/u/img/ib/466/165/165466-1.jpg' alt={"Avatar"}/>
            <div className={H.login}>
                {props.isAuth ? props.login:
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
};

export default Header;