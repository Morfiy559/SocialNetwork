import React from "react";
import s from './Navbar.module.css';
const Navbar =()=>{
    return(
        <nav className={s.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
        </nav>
    )
}
export default Navbar;