import React from "react";
import cx from 'classnames'

import "./Loader.css";

const Loader = ({
    className
}: {
    className?: string,
}) => (
    <div className={cx("loader-layout", className)}>
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Loader;
