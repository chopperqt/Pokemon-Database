import React from "react";

import { formatName } from 'src/helpers/format'

import styles from "./ProgressBar.module.scss";

interface IProgressBar {
    stat: number;
    name: string;
}

const ProgressBar = ({ stat, name }: IProgressBar) => {
    const statPercent = stat / 2;

    return (
        <div className={styles.progressBar}>
            <div>{formatName(name)}</div>
            <div className={styles.bar}>
                <div
                    className={styles.progress}
                    style={{ width: `${statPercent}%` }}
                >
                    {stat}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
