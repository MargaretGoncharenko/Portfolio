import React, {useState} from "react";
import {v1} from "uuid";
import s from "./MySkills.module.css";
import {OneSkill} from "./OneSkill";
import c from "./../common/styles/containerStyle.module.css"

export type SkillsPropsType = {
    id: string
    name: string
    description: string
}
export const MySkills = () => {
    let [skills, setSkills] = useState<Array<SkillsPropsType>>([
            {id: v1(), name: "React", description: "ipsum dolor sit."},
            {id: v1(), name: "Redux", description: "Lorem ipsum dolor sit amet ."},
            {id: v1(), name: "Redux-Thunk", description: "Lorem ipsum dolor sit amet consectetuer ."},
            {id: v1(), name: "TypeScript", description: " ligula eget."},
            {id: v1(), name: "JavaScript", description: "Lorem ipsum ligula eget."},
            {id: v1(), name: "AXIOS", description: "ipsum dolor sit amet consectetuer adipiscing eget."},
            {id: v1(), name: "RestAPI", description: "Lorem ipsum ."},
            {id: v1(), name: "Material-UI", description: "aenean commodo ligula eget."},
            {id: v1(), name: "TDD", description: "Lorem ipsum  consectetuer adipiscing elit."},
            {id: v1(), name: "Git, GitHub", description: "eget."},
            {
                id: v1(),
                name: "HTML&CSS",
                description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
            },
            {id: v1(), name: "npm, yarn", description: "Lorem ipsum adipiscing elit aenean commodo ligula eget."},
        ]
    )
    return (
        <div className={c.container}>
            <div className={c.name}>My SkillSet</div>
            <div className={s.block}>
                <OneSkill skillSet={skills}/>
            </div>
        </div>
    )
}
