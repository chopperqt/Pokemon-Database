import React from 'react'

import { Img, Section } from 'src/components'

import styles from './Image.module.scss'

interface IImage {
    alt: string,
    url: string
}

const Image = ({
    alt,
    url
}:IImage) => (
    <Section className={styles.image}>
        <Img className={styles.image} src={url} alt={alt} />
    </Section>
)

export default Image