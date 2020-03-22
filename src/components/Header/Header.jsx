import React from "react";
import H from "./Header.module.css";

const Header = () => {
    return (
        <div className={H.header}>
            <img className={H.avatar} src='https://namobilu.com/u/img/ib/466/165/165466-1.jpg' alt={"Avatar"}/>
        </div>
    )
};

export default Header;