import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return(
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/1020/508/png-transparent-google-chrome-computer-icons-web-browser-desktop-chrome.png'/>

        <div className={s.loginBlock}>
            {
                props.isAuth?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to='/login'>Login</NavLink>
            }
        </div>
        </header>
    )
}
export default Header;
