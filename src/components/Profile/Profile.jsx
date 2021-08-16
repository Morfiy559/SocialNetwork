import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
const Profile =()=>{
    return(
        <div className={s.content}>
            <div>
                <img src='https://lh3.googleusercontent.com/q_oxbEd3XEpegpDVZyYYhtMZ_VIxrwSHguCZiKme4K11m_QMlh41mtzISbUpwi0AZP8=h500'/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}
export default Profile;