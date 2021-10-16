import React, {useState} from "react";
import styles from "./users.module.css";
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount/props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftEdge = (portionNumber-1)*props.portionSize;
    let rightEdge = portionNumber*props.portionSize;


    return <div>
        <div className={styles.pages}>
            {portionNumber > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
            {pages.filter(page=>page>leftEdge &&page<=rightEdge).map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPagesChanged(p)
                             }}>{p + " "}</span>
            })}
            {portionNumber<portionCount &&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <span>
                    <NavLink to={'./profile/' + u.id}>
                    <img src={u.photos.small || avatar} className={styles.userPhoto} alt="avatar"/>
                    </NavLink>
                </span>
                <span>
                    {(u.followed === true) ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);

                        }}>unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }}>follow</button>}
                </span>
            </span>
            <span>
                <span>
                    <span>
                        {u.name}
                    </span>
                    <span>
                        {u.status}
                    </span>
                </span>
                <span>
                    <span>
                        {"u.location.country"}
                    </span>
                    <span>
                        {"u.location.city"}
                    </span>
                </span>
            </span>
        </div>)}
    </div>
}
export default Users;