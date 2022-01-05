import React from 'react'

import pokemon from 'src/templates/no-data.png'

import styles from './Empty.module.css'

const Empty = () => (
    <div data-testid='search-popup-no-item' className={styles.empty}>
        <img className={styles.image} src={pokemon} alt="no data" />
        <div>Nothing found</div>
    </div>
)

export default Empty