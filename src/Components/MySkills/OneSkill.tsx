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
                                                         src={"https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"}
                                                         height={"50px"}/></div>

                            <div className={o.name}>{s.name}</div>
                            <div>
                                <div className={o.text}>{s.description}</div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}