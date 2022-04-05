import React from "react";
import s from "./MySkills.module.css"

export const MySkills = () => {
    return (
        <div className={s.container}>
            <div className={s.name}><b>My SkillSet</b></div>
            <div className={s.block}>
                <div className={s.skill}>React</div>
                <div className={s.skill}>Redux</div>
                <div className={s.skill}>Redux-Thunk</div>
                <div className={s.skill}>TypeScript</div>
                <div className={s.skill}>JavaScript</div>
                <div className={s.skill}>AXIOS/RestAPI</div>
                <div className={s.skill}>Material-UI</div>
                <div className={s.skill}>TDD</div>
                <div className={s.skill}>Git, GitHub</div>
                <div className={s.skill}>HTML&CSS</div>
                <div className={s.skill}>npm, yarn</div>
            </div>
        </div>
    )
}