import React from "react";
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPost/MyPostsContainer";
const Profile =(props)=>{
    return(
        <div className={s.content}>
            <ProfileInfo
                profile={props.profile}
                isOwner={props.isOwner}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer store={props.store} />
        </div>
    )
}
export default Profile;