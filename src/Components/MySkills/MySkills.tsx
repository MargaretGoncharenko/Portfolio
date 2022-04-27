import React, {useState} from "react";
import {v1} from "uuid";
import s from "./MySkills.module.css";
import {OneSkill} from "./OneSkill";
import c from "./../common/styles/containerStyle.module.css"

export type SkillsPropsType = {
    id: string
    name: string
    description: string
    icon: string
}
export const MySkills = () => {
    let [skills, setSkills] = useState<Array<SkillsPropsType>>([
            {
                id: v1(),
                name: "React",
                description: "ipsum dolor sit.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            },
            {
                id: v1(),
                name: "Redux",
                description: "Lorem ipsum dolor sit amet .",
                icon: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
            },
            {
                id: v1(),
                name: "Redux-Thunk",
                description: "Lorem ipsum dolor sit amet consectetuer .",
                icon: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
            },
            {
                id: v1(),
                name: "TypeScript",
                description: " ligula eget.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
            },
            {
                id: v1(),
                name: "JavaScript",
                description: "Lorem ipsum ligula eget.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
            },
            {
                id: v1(),
                name: "AXIOS",
                description: "ipsum dolor sit amet consectetuer adipiscing eget.",
                icon: "https://seekvectors.com/files/download/Axios-logo.png"
            },
            {
                id: v1(),
                name: "RestAPI",
                description: "Lorem ipsum .",
                icon: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/rest-api.png"
            },
            {
                id: v1(),
                name: "Material-UI",
                description: "aenean commodo ligula eget.",
                icon: "https://v4.mui.com/static/logo.png"
            },
            {
                id: v1(),
                name: "TDD",
                description: "Lorem ipsum  consectetuer adipiscing elit.",
                icon: "https://www.aresourcepool.com/wp-content/uploads/2017/09/tdd.png"
            },
            {
                id: v1(),
                name: "Git, GitHub",
                description: "eget.",
                icon: "https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
            },
            {
                id: v1(),
                name: "HTML",
                description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
                icon: "https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
            },
        {
            id: v1(),
            name: "CSS",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
        },
            {
                id: v1(),
                name: "npm",
                description: "Lorem ipsum adipiscing elit aenean commodo ligula eget.",
                icon: "https://veronikamishkovec.github.io/img/npm.png"
            },
        {
            id: v1(),
            name: "yarn",
            description: "Lorem ipsum adipiscing elit aenean commodo ligula eget.",
            icon: "https://iconape.com/wp-content/png_logo_vector/yarn-logo.png"
        },
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
