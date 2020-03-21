import React from "react";
import NB from "./NavBar.module.css";
import Portfolio from "./Portfolio/Portfolio";

const NavBar = () => {
    return (
        <div className={NB.navBar}>
            <div className={NB.tools}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
        </div>
    )
};

export default NavBar;