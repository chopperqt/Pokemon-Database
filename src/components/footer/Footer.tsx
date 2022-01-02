import React from 'react'

import { Link } from 'src/components'

import styles from './Footer.module.scss'

const Footer = () => (
    <pre className={styles.footer}>
        Made with ❤️ by <Link type="href" to="https://github.com/chopperqt" text="Chopper" />
    </pre>
)

export default Footer