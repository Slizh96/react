import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Max
                </div>
                <div className={s.dialog}>
                    Nik
                </div>
                <div className={s.dialog}>
                    Sergei
                </div>
                <div className={s.dialog}>
                    Alex
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