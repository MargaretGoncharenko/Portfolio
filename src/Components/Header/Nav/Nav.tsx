import React from "react";
import n from "./Nav.module.css";

export const Nav = () => {
    return(
        <div className={n.container}>
            <div className={n.part}>Main</div>
            <div className={n.part}>SkillSet</div>
            <div className={n.part}>Projects</div>
            <div className={n.part}>Contacts</div>
        </div>
    )
}