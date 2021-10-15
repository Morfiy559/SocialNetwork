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
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPageSel,
    getFollowingInProgressSel, getIsFetching,
    getPageSizeSel,
    getTotalCountSel,
    getUsersSel
} from "../../redux/users-selectors";

class UsersAPI extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPagesChanged=(numberPage)=>{
        this.props.getUsers(numberPage, this.props.pageSize);
    }

    render() {
        debugger
        return <>
            {this.props.isFetching ? <Preloader/>:null}
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
        users: getUsersSel(state),
        pageSize: getPageSizeSel(state),
        totalUsersCount: getTotalCountSel(state),
        currentPage: getCurrentPageSel(state),
        followingInProgress:getFollowingInProgressSel(state),
        isFetching: getIsFetching(state)
    }
}


export default compose(
    // withAuthRedirect,
    connect(mapStateToProps,{
        follow,unfollow,setUsers, setCurrentPage,
        toggleFollowingProgress,getUsers
    }
))(UsersAPI);