import React from "react";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {

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


        return <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPagesChanged={this.onPagesChanged}
            users={this.props.users}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state)=>{
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(count)=>{
            dispatch(setTotalUsersCountAC(count))
        },

    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);

export default UsersContainer;