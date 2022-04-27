import React, {useState} from "react";
import p from "./MyProjects.module.css";
import {Project} from "./Project";
import c from "./../common/styles/containerStyle.module.css";
import {v1} from "uuid";

export type ProjectPropsType = {
    id: string
    name: string
    description: string
    link?:string
}
export const MyProjects = () => {
    let [projects, setProjects] = useState<Array<ProjectPropsType>>([
        {
            id: v1(), name: "Social network", description: "Stack: SCSS, JavaScript, TypeScript, React, Redux,\n" +
                "Redux thunk, Axios; Using TypeScript for best code\n" +
                "control; Reusable components development; Refactoring,\n" +
                "bug fixing.", link:"https://github.com/MargaretGoncharenko/Avis"
        },
        {
            id: v1(), name: "Todolist", description: "Stack: CSS, JavaScript, TypeScript, React, Redux, Material\n" +
                "UI; Using TypeScript for best code control."
        },
        {id: v1(), name: "Counter", description: "In progress"},
    ])
    return (
        <div className={c.container}>
            <div className={c.name}><span>My Projects</span></div>
            <div className={p.allProjects}>
                <Project projects={projects}/>
            </div>
        </div>
    )
}