import React from "react";
import h from "./Header.module.css";
import {Nav} from "./Nav/Nav";


export const Header = () => {
    return(
        <div className={h.header}>
           <Nav/>
            </div>
    )
}