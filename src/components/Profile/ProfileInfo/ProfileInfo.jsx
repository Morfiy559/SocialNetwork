import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import palecUp from '../../../assets/images/Thumbsup.png';
import palecDown from '../../../assets/images/Thumbsdown.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from "../../../assets/images/avatar.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    let onSubmit = (formData)=>{
        props.saveProfile(formData).then(
            ()=>{
                setEditMode(false);
            }
        );
    }
    return (
        <div>

            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://lh3.googleusercontent.com/q_oxbEd3XEpegpDVZyYYhtMZ_VIxrwSHguCZiKme4K11m_QMlh41mtzISbUpwi0AZP8=h500'/>*/}
            {/*</div>*/}
            <img src={props.profile.photos.large || avatar} alt="photo" className={s.userPhoto}/>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} className={s.mainPhoto}/>
            {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : <ProfileData isOwner={props.isOwner} goToEditMode={()=>{setEditMode(true)}} profile={props.profile}/>}
            {/*<div className={s.descriptionBlock}>ava+description</div>*/}

        </div>
    )
}
const ProfileData = ({profile,isOwner,goToEditMode}) => {
    return (
        <div>
            {isOwner &&<div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>Full name:{profile.fullName}</div>
            <div className={s.lookingForAJob}>Looking for a job: {profile.lookingForAJob ? <img src={palecUp} alt=""/> :
                <img src={palecDown} alt=""/>}</div>
            <div>My professional skills: {profile.lookingForAJobDescription}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>:{contactValue}</div>
}
export default ProfileInfo;