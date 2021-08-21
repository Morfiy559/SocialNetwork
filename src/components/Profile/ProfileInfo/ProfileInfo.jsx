import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img
                    src='https://lh3.googleusercontent.com/q_oxbEd3XEpegpDVZyYYhtMZ_VIxrwSHguCZiKme4K11m_QMlh41mtzISbUpwi0AZP8=h500'/>
            </div>
            <div className={s.descriptionBlock}>ava+description</div>

        </div>
    )
}
export default ProfileInfo;