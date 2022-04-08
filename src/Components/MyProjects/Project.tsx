import React from "react";
import pr from "./Project.module.css";
import {ProjectPropsType} from "./MyProjects";

type ProjectProps = {
    projects: Array<ProjectPropsType>
}
export const Project = (props: ProjectProps) => {
    return (
        <div>
            {
                props.projects.map(p => {
                    return (
                        <div className={pr.block}>
                            <div className={pr.projectName}>{p.name}</div>
                            <img
                                src={"https://previews.123rf.com/images/rawpixel/rawpixel1504/rawpixel150405509/38967820-social-network-social-media-business-people-tecnolog%C3%ADa-concept.jpg"}
                                className={pr.projectImage}/>
                            <div>
                                <button className={pr.view}>view</button>
                            </div>
                            <div className={pr.text}>{p.description}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}