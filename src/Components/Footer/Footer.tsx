import React from "react";
import c from "./../common/styles/containerStyle.module.css";
import f from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={c.container}>
            <div className={f.name}>Margaret Goncharenko</div>
            <div className={f.block}>
                <div className={f.fragment}>a</div>
                <div className={f.fragment}>b</div>
                <div className={f.fragment}>c</div>
                <div className={f.fragment}>d</div>
            </div>
            <div className={f.last}>@2022 All rights reserved</div>
        </div>
    )
}
