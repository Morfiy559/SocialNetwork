import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import palecUp from '../../../assets/images/Thumbsup.png';
import palecDown from '../../../assets/images/Thumbsdown.png';
import Status from './Status';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>

            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://lh3.googleusercontent.com/q_oxbEd3XEpegpDVZyYYhtMZ_VIxrwSHguCZiKme4K11m_QMlh41mtzISbUpwi0AZP8=h500'/>*/}
            {/*</div>*/}
            <img src={props.profile.photos.large} alt="photo"/>
            <Status status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJob? <img src={palecUp} alt=""/>: <img src={palecDown} alt=""/>}</div>
            {/*<div className={s.descriptionBlock}>ava+description</div>*/}

        </div>
    )
}
export default ProfileInfo;