import React from "react";
import {SkillsPropsType} from "./MySkills";
import o from "./OneSkill.module.css";

type OneSkillPropsType = {
    skillSet: Array<SkillsPropsType>
}
export const OneSkill = (props: OneSkillPropsType) => {
    return (
        <div className={o.block}>
            {
                props.skillSet.map(s => {
                    return (
                        <div className={o.skillBox}>
                            <div className={o.icon}><img className={o.picture}
                                                         src={s.icon}
                                                         height={"70px"}/></div>

                            <div className={o.name}>{s.name}</div>
                            {/*<div>*/}
                            {/*    <div className={o.text}>{s.description}</div>*/}
                            {/*</div>*/}
                        </div>
                    )
                })
            }


        </div>
    )
}