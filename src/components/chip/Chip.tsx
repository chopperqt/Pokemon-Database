import React from "react";
import cx from "classnames";

import styles from "./Chip.module.scss";

interface IChip {
    text?: string
    className?: string
    color?: string
}

const Chip = ({ 
    text, 
    className, 
    color,
}: IChip) => (
    <div className={cx(styles.chip, "text-semi-bold", 'text-size-sm', className, color)}>
        {text}
    </div>
);

export default Chip;
