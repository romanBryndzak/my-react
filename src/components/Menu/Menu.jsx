import React from "react";
import M from "./Menu.module.css";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={M.menu}>
            <div>
                <div className={M.tool}>
                    <NavLink to={'/portfolio'} activeClassName={M.active}>Portfolio</NavLink>
                </div>
                <div className={M.tool}>
                    <NavLink to={'/messages'} activeClassName={M.active}>Messages</NavLink>
                </div>
                <div className={M.tool}>
                    <NavLink to={'/news'} activeClassName={M.active}>News</NavLink>
                </div>
                <div className={M.tool}>
                    <NavLink to={'/music'} activeClassName={M.active}>Music</NavLink>
                </div>
                <div className={M.tool}>
                    <NavLink to={'/settings'} activeClassName={M.active}>Settings</NavLink>
                </div>
                <div className={M.tool}>
                    <NavLink to={'/myFriends'} activeClassName={M.active}>My friends</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Menu;