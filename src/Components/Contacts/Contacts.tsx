import React, {useState} from "react";
import c from "./../common/styles/containerStyle.module.css";
import a from "./Contacts.module.css";
import {v1} from "uuid";
import {OneContact} from "./OneContact";

export type ContactPropsType = {
    id: string
    name: string
    src: string
    icon: string
}

export const Contacts = () => {
    let [contacts, setContacts] = useState<Array<ContactPropsType>>([
        {
            id: v1(),
            name: "phoneNumber",
            src: "dgfgr",
            icon: "https://icon-library.com/images/call-phone-icon/call-phone-icon-11.jpg"
        },
        {id: v1(), name: "gitHub", src: "dgfgr", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"},
        {
            id: v1(),
            name: "telegram",
            src: "dgfgr",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
        },
        {
            id: v1(),
            name: "codewars",
            src: "dgfgr",
            icon: "https://www.xwhos.com/photo/whois_codewars_profile_786571.webp"
        },
        {
            id: v1(),
            name: "email",
            src: "dgfgr",
            icon: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
        },
        {id: v1(), name: "linkedIn", src: "dgfgr", icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png"},

    ])
    return (
        <div className={c.container}>
            <div className={c.name}>Contacts</div>
            <span className={a.block}>
                <OneContact contacts={contacts}/>
            </span>
        </div>
    )
}