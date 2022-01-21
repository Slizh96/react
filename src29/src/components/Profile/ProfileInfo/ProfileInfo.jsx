import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://grandgames.net/puzzle/source_p/banf.jpg'/>
            </div>
            <div className={s.descriptionBlock}><img src='https://i.pinimg.com/236x/df/77/04/df770427fefe27c1c8b20cf9e845f716.jpg'/>
            </div>
        </div>
    )
}
export default ProfileInfo