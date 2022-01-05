import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Link.module.scss";

interface ILink {
    to: string;
    text: string;
    type?: "route" | "href";
    click?: () => void
}

const Link = ({ 
    to, 
    text, 
    type,
    click
}: ILink) => {
    if (type === "href") {
        return (
            <a target="_blank" href={to} rel="noreferrer">
                {text}
            </a>
        );
    }

    return (
        <NavLink 
            className={styles.link} 
            to={to}
            onClick={click}
        >
            {text}
        </NavLink>
    );
};

export default Link;
