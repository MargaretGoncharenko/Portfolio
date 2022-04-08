import React from "react";
import i from "./Introducing.module.css";
import c from "./../common/styles/containerStyle.module.css"
import photo from "./portfolio.jpg"

export const Introducing = () => {
    return (
        <div className={c.container}>
            <div className={c.name}>About me</div>
            <div className={i.introduction}>
                <div className={i.block}>
                    <h2>Margaret Goncharenko</h2>
                    <p>Hello! I'm a Front-End developer who has a strong passion for
                        programming. I have experience in creating SPA with React/
                        Redux, TypeScript/JavaScript, markup.
                        For now I'm improving my skills in React/Redux (TypeScript)
                        and I'm going to study NodeJS, my next target is becoming a
                        Full-Stack Developer.
                        My English is B1-B2 in progress.
                        Open to your suggestions.</p>
                    <div className={i.list}>
                        <div><b>Age:</b> 25</div>
                        <div><b>Location:</b> Minsk, Belarus</div>
                        <div><b>Freelance:</b> available</div>
                        <div><b>English:</b> B1-B2 in progress</div>
                    </div>

                </div>
                <div><img src={photo} className={i.image}/></div>
            </div>
        </div>
    )
}