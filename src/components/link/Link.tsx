import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Link.module.scss'

interface ILink {
    to: string
    text: string
}

const Link = ({to, text}: ILink) => (
    <NavLink className={styles.link} to={to} >{text}</NavLink>
)

export default Link