import React from "react";
import H from "./Header.module.css";
import {NavLink} from "react-router-dom";
import city from "../../image/city.jpg"
import auxiliary from "../../auxiliary/auxiliary.module.css";

const Header = (props) => {
    return (
        <div className={H.header}>
            <img className={H.avatar} src={city} alt={'background'}/>
            <div className={H.login}>
                {props.isAuth
                    ? <div> {props.login}
                        <div>
                            <button onClick={props.logoutThunk} className={auxiliary.but}>Logout</button>
                        </div>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
};

export default Header;