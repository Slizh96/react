import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='./dialogs/1'>
                             Olya </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='./dialogs/2'> Max </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='./dialogs/3'>Nik</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='./dialogs/4'>Sergei</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='./dialogs/5'> Alex</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Yes
                </div>
                <div className={s.message}>
                    No
                </div>
                <div className={s.message}>
                    ok
                </div>
                <div className={s.message}>
                    mb
                </div>
            </div>
        </div>
    )
}

export default Dialogs