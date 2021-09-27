import React from "react";
import styles from "./users.module.css";
import avatar from "../../assets/images/avatar.png";

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
                    <img src={u.photos.small || avatar} className={styles.userPhoto} alt="avatar"/>
                </span>
                <span>
                    {(u.followed === true) ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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