import React from "react";
import styles from "./users.module.css";
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                    {(u.followed === true) ? <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                withCredentials:true,
                                headers:{
                                    'API-KEY':'57532bf6-e55f-488a-bee7-a2fd0c3210a1'
                                }
                            }).then(
                                response => {
                                    if(response.data.resultCode===0){
                                        props.unfollow(u.id)
                                    }
                                }
                            )

                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials:true,
                                headers:{
                                    'API-KEY':'57532bf6-e55f-488a-bee7-a2fd0c3210a1'
                                }
                            }).then(
                                response => {
                                    if(response.data.resultCode===0){
                                        props.unfollow(u.id)
                                    }
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