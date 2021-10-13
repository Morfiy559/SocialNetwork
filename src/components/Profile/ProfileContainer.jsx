import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId= this.props.authorizedUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} update={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps =(state)=>({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    isAuth:state.auth.isAuth,
    authorizedUserId:state.auth.userId
})

export default compose(
    connect (mapStateToProps, {setUserProfile,getProfile,getStatus,updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);