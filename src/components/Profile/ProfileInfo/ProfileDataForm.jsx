import React from "react";
import s from "./ProfileInfo.module.css";
import style from './../../common/FormsControls/FormsControls.module.css';
import palecUp from "../../../assets/images/Thumbsup.png";
import palecDown from "../../../assets/images/Thumbsdown.png";
import {Field} from "redux-form";
import {Element} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form/es";

const ProfileDataForm = ({handleSubmit,profile,error}) => {
    const Input = Element('input');
    const Textarea = Element('textarea');
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error &&
            <div className={style.error}>{error}</div>
            }
            <div>Full name:{<Field component={Input} name={'fullName'} placeholder={'Full name'} />}</div>
            <div className={s.lookinForAJob}>
                Looking for a job:
                {<Field component={Input} name={'lookingForAJob'} placeholder={'LookingForAJob'} type={'checkbox'}/>}
            </div>
            <div>My professional skills:
                {<Field component={Textarea} name={'lookingForAJobDescription'} placeholder={'Looking For A Job Description'} />}
            </div>

            <div>
                About me:
                {<Field component={Textarea} name={'aboutMe'} placeholder={'About Me'} />}
            </div>
            <div>Contacts: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contacts}>
                    {key}:<Field  component={Input} name={'contacts.' + key} placeholder={key} />
                </div>
            })}</div>
        </form>
    )
}
const ProfileDataFormRedux = reduxForm({form:'edit-profile'})(ProfileDataForm);
export default ProfileDataFormRedux;