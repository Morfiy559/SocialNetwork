import React from "react";
import styles from './users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            }
        )
    }

    onPagesChanged=(numberPage)=>{
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i =1;i<=pagesCount;i++){
            pages.push(i)
        }
        return <div>
            <div className={styles.pages}>
            {pages.map(p=>{
                return <span className={this.props.currentPage===p && styles.selectedPage}
                onClick={()=>{this.onPagesChanged(p)}}>{p+" "}</span>
            })}
            </div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <span>
                    <img src={u.photos.small || avatar} className={styles.userPhoto} alt="avatar"/>
                </span>
                <span>
                    {(u.followed === true) ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
}

export default Users;