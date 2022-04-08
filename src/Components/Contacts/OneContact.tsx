import React from "react";
import {ContactPropsType} from "./Contacts";
import o from "./OneContact.module.css";

type OneContactPropsType = {
    contacts: Array<ContactPropsType>
}
export const OneContact = (props: OneContactPropsType) => {
    return (
        <div>
            {props.contacts.map(c => {
                return (
                    <div className={o.contact}>
                        <div className={o.cover}><img className={o.icon} src={c.icon}/></div>
                    </div>

                )
            })}
        </div>
    )
}