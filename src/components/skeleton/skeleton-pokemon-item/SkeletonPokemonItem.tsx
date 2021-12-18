import React from "react";

import styles from "./SkeletonPokemonItem.module.css";

const SkeletonPokemonItem = () => (
    <div className={styles.wrap}>
        <div className={styles.active}></div>
    </div>
);

export default SkeletonPokemonItem;
