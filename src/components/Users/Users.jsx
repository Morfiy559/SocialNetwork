import React from "react";
import styles from "./users.module.css";
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {SubscribeAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i =1;i<=pagesCount;i++){
        pages.push(i)
    }
    return <div>
        <div className={styles.pages}>
            {pages.map(p=>{
                return <span className={props.currentPage===p && styles.selectedPage}
                             onClick={()=>{props.onPagesChanged(p)}}>{p+" "}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <span>
                    <NavLink to={'./profile/' + u.id}>
                    <img src={u.photos.small || avatar} className={styles.userPhoto} alt="avatar"/>
                    </NavLink>
                </span>
                <span>
                    {(u.followed === true) ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {

                            props.toggleFollowingProgress(true, u.id);
                            SubscribeAPI.unfollow(u.id).then(
                                data => {
                                    if(data.resultCode===0){
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id);

                                }
                            )

                        }}>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            SubscribeAPI.follow(u.id).then(
                                data => {
                                    if(data.resultCode===0){
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                }
                            )
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