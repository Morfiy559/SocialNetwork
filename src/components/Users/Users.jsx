import React from "react";
import styles from './users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.png';

const Users = (props) => {
debugger;
    if(props.users.length===0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            response=>{
                props.setUsers(response.data.items)
            }
        )
    }




    return <div>
        {props.users.map(u=><div key={u.id}>
            <span>
                <span>
                    <img src={u.photos.small != null ? u.photos.small : avatar } className={styles.userPhoto} alt="avatar"/>
                </span>
                <span>
                    {(u.followed===true)?<button onClick={()=>{props.unfollow(u.id)}}>unfollow</button>
                        :<button onClick={()=>{props.follow(u.id)}}>follow</button>}
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