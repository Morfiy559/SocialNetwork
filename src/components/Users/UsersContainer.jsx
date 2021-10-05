import React from "react";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress, getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import {usersAPI} from "../../api/api";

class UsersAPI extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPagesChanged=(numberPage)=>{
        this.props.getUsers(numberPage, this.props.pageSize);
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/>:null }
            <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPagesChanged={this.onPagesChanged}
            users={this.props.users}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
        </>
    }
}

let mapStateToProps = (state)=>{
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

// let mapDispatchToProps = (dispatch)=>{
//     return{
//         follow:(userId)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId)=>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers:(users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount:(count)=>{
//             dispatch(setTotalUsersCountAC(count))
//         },
//         toggleIsFetching:(isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//
//     }
// }

const UsersContainer = connect(mapStateToProps,{
    follow,unfollow,setUsers, setCurrentPage,
    toggleFollowingProgress,getUsers
})(UsersAPI);

export default UsersContainer;