import React from "react";
import c from "./../common/styles/containerStyle.module.css";
import rw from "./RemoteWork.module.css";
import b from "./../common/styles/Button.module.css"

export const RemoteWork = () => {
    return (
        <div className={c.container}>
            <div className={c.name}>Remote work</div>
            <div className={rw.block}>
                <div className={rw.title}>Considering remote work</div>
                <button className={b.square_btn}>hire me</button>
            </div>
        </div>
    )
}