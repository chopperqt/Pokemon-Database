import React from 'react'
import cx from 'classnames'

import styles from './Section.module.scss'

interface ISection { 
    className?: string,
    children?: JSX.Element
}

const Section = ({
    className,
    children
}: ISection) => (
    <div className={cx(styles.section, className)}>
        {children}
    </div>
)


export default Section