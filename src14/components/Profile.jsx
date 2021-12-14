import React from "react";
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://grandgames.net/puzzle/source_p/banf.jpg'/>
            </div>
            <div><img src='https://i.pinimg.com/236x/df/77/04/df770427fefe27c1c8b20cf9e845f716.jpg'/>
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className='posts'>
                        <div className={s.item}>post1</div>
                        <div className={s.item}>post2</div>
                        <div className={s.item}>post3</div>
                    </div>
                </div>
        </div>
    )
}
export default Profile